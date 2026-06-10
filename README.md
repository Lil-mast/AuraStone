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

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Engine:** [Hugging Face Inference SDK](https://huggingface.co/docs/huggingface.js/inference/README)
- **Infrastructure:** Designed for [AWS](https://aws.amazon.com/)

---

## 📂 Project Structure

```text
aurastone/
├── app/                # Next.js App Router (Pages, Layouts, API Routes)
│   └── api/            # Server-side API endpoints (AI Concierge)
├── components/         # Reusable UI components (Material-inspired)
├── lib/                # Shared utilities and helper functions
├── services/           # External service integrations (Hugging Face)
├── public/             # Static assets (Textures, Icons)
├── styles/             # Global CSS and Tailwind configurations
├── types.ts            # Global TypeScript definitions
└── constants.ts        # App-wide constants and configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- A Hugging Face API Token

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/aurastone.git
   cd aurastone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   # Add your HUGGINGFACE_API_KEY to .env.local
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

---

## ☁️ AWS Hosting & Deployment

AuraStone is optimized for deployment on AWS. Here are the recommended paths:

### Option 1: AWS Amplify (Recommended for Frontend)
1. Connect your GitHub repository to **AWS Amplify**.
2. Amplify will automatically detect the Next.js framework.
3. Add your `HUGGINGFACE_API_KEY` in the Amplify "Environment Variables" settings.
4. Deploy.

### Option 2: AWS App Runner (For Containerized Deployment)
1. Create a `Dockerfile` for the Next.js app.
2. Push your image to **Amazon ECR**.
3. Point **AWS App Runner** to the ECR image for a managed, auto-scaling service.

### Option 3: Amazon EC2 or Lightsail
1. Provision a Linux instance.
2. Install Node.js and PM2.
3. Clone the repo, build the project (`npm run build`), and start it using PM2.

---
