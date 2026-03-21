/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NextRequest, NextResponse } from 'next/server';
import { buildConciergeSystemPrompt } from '@/lib/conciergePrompt';

const HF_CHAT_URL = 'https://router.huggingface.co/v1/chat/completions';

type ChatTurn = { role: string; text: string };

function toOpenAiMessages(history: ChatTurn[] | undefined, message: string) {
  const messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
    { role: 'system', content: buildConciergeSystemPrompt() },
  ];

  for (const h of history ?? []) {
    if (h.role === 'user') {
      messages.push({ role: 'user', content: h.text });
    } else if (h.role === 'model' || h.role === 'assistant') {
      messages.push({ role: 'assistant', content: h.text });
    }
  }

  messages.push({ role: 'user', content: message });
  return messages;
}

export async function POST(req: NextRequest) {
  const token = process.env.HUGGINGFACE_API_KEY;
  if (!token?.trim()) {
    console.error('concierge: HUGGINGFACE_API_KEY is not set');
    return NextResponse.json({ error: 'missing_server_key' }, { status: 500 });
  }

  let body: { history?: ChatTurn[]; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message) {
    return NextResponse.json({ error: 'empty_message' }, { status: 400 });
  }

  const model =
    process.env.HF_CHAT_MODEL?.trim() || 'meta-llama/Llama-3.2-3B-Instruct';

  const messages = toOpenAiMessages(body.history, message);

  try {
    const res = await fetch(HF_CHAT_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 512,
        temperature: 0.7,
        stream: false,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('concierge: HF upstream error', res.status, errBody.slice(0, 500));
      return NextResponse.json({ error: 'upstream' }, { status: 502 });
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string | null } }>;
    };
    const content = data?.choices?.[0]?.message?.content;
    const text = typeof content === 'string' ? content.trim() : '';
    if (!text) {
      console.error('concierge: empty model content', JSON.stringify(data).slice(0, 300));
      return NextResponse.json({ error: 'empty_response' }, { status: 502 });
    }

    return NextResponse.json({ text });
  } catch (err) {
    console.error('concierge: request failed', err);
    return NextResponse.json({ error: 'network' }, { status: 502 });
  }
}
