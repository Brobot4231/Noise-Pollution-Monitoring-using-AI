# 🔊 Silent Sentinel — AI-Powered Noise Pollution Monitoring System

> Real-time ambient noise monitoring, AI classification, and geolocated alerts.

---

## 📌 Overview

Silent Sentinel captures and analyzes ambient sound to help identify noise pollution hotspots, trigger threshold-based alerts, and provide actionable suggestions. The app combines browser microphone input, GenKit AI flows for classification, and a responsive dashboard for visualization and historical analysis.

---

## ✨ Features

- 🔊 Real-time noise level capture and smoothing
- 🧠 AI-powered classification of sound types (traffic, construction, speech, etc.)
- 🚨 Threshold monitoring with alerting and escalation options
- 📍 Geolocation tagging for each recorded event
- 🗺️ Interactive heatmap and historical trend charts
- 🩺 Health and exposure suggestions based on noise levels
- ♿ Responsive UI with accessible components

---

## 🛠️ Tech Stack

| Category | Tools |
|----------|-------|
| **Frontend** | Next.js 15, React 18, TypeScript |
| **Styling** | Tailwind CSS, Radix UI |
| **AI** | GenKit (@genkit-ai/next, @genkit-ai/googleai) |
| **Realtime / Persistence** | Firebase |
| **Validation** | Zod |
| **Forms** | React Hook Form |
| **Charts** | Recharts |

---

## ⚙️ Installation

```bash
# Clone repository
git clone <repo-url>
cd AI-Powered-Noise-Pollution-Monitoring-System-main

# Install dependencies
npm install
```

### Requirements

- Node.js 20+
- npm (or pnpm)

---

## 🚀 Development

```bash
# Run the dev server (Turbopack)
npm run dev
```

The app runs by default on port `9002`.

### Useful scripts

- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run linters
- `npm run typecheck` — Run TypeScript checks
- `npm run genkit:dev` — Start GenKit AI flows in dev mode
- `npm run genkit:watch` — Start GenKit in watch mode

---

## 🧭 Usage

1. Start the dev server: `npm run dev`
2. Allow microphone access when prompted in the browser
3. Configure monitoring thresholds via the dashboard
4. View live noise levels, classification, and geolocation heatmap

---

## 🔮 Future Improvements

- Add persistent user accounts and per-user thresholds
- Offline buffering and batch upload for intermittent connectivity
- Edge deployment with an optimized model (TensorFlow Lite) for mobile devices
- Automated export of noise event reports (CSV / PDF)
- Integrate additional sensors (air quality, vibration) for richer context

---

## 🙏 Acknowledgements

- GenKit for AI flow tooling
- Radix UI and Tailwind CSS for UI primitives
- Firebase for realtime and storage services

> **Disclaimer:** This project is provided for research and monitoring purposes. It is not a substitute for professional environmental assessment and should be used in accordance with local privacy and recording laws.
