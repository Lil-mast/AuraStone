# Aura

Aura is a digital space shaped by silence, texture, and timeless design.

Technology should feel like an extension of the natural world, not an interruption. Inspired by the smoothness of river stone, the grain of aged materials, and the quiet of well-crafted objects, Aura creates a calm interface for a noisy world.  

Using materials that mature beautifully—sandstone, raw aluminum, organic fibers—Aura builds a tactile connection between your digital life and your physical sanctuary.

---

## ✨ Philosophy

- **Quiet by default**  
  Aura avoids visual noise and motion that distract. Every element exists with purpose and restraint.

- **Organic materiality**  
  The design language is shaped by natural textures, weathered surfaces, and timeless objects.

- **Digital–physical harmony**  
  Interfaces should feel as grounded as the world they live in—soft, subtle, and touchable.

- **Tools that age well**  
  Aura favors simplicity and durability over trends, focusing on experiences that feel better with time.

---

## 🌿 Features

- Calming, material-inspired UI  
- Minimalist and distraction-free interactions  
- Smooth, quiet animations  
- Sensible defaults with room for customization  
- Built to integrate effortlessly into your own digital sanctuary

---

## 🚀 Getting Started

Stack: **Next.js** (App Router) + **React** + **TypeScript**, with **Tailwind CSS** (build-time). The AI concierge calls **Hugging Face Inference** from a **server-only** route (`/api/chat`), so API keys are not bundled into the browser.

```bash
# Clone the repository
git clone https://github.com/your-username/aurastone.git

# Enter the project
cd aurastone

# Install dependencies
npm install

# Copy env template and add your Hugging Face token (see .env.example)
# HUGGINGFACE_API_KEY=hf_...

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build && npm start
```
