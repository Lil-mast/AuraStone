/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export async function sendConciergeMessage(
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ history, message: newMessage }),
  });

  let data: { text?: string; error?: string } = {};
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }

  if (!res.ok) {
    if (data.error === 'missing_server_key') {
      return "I'm sorry, the concierge isn't configured on the server yet. (Missing HUGGINGFACE_API_KEY)";
    }
    return 'I apologize, but I seem to be having trouble reaching our archives at the moment.';
  }

  if (typeof data.text === 'string' && data.text.length > 0) {
    return data.text;
  }

  return 'I apologize, but I seem to be having trouble reaching our archives at the moment.';
}
