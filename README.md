# Cyber Radar

**[Live Demo: View Cyber Radar Here](https://cyber-radar-live.vercel.app/)**

Cyber Radar is a highly responsive, real-time news aggregation dashboard engineered specifically to track the rapidly evolving cybersecurity landscape. By cutting through the noise of generic news feeds, it delivers focused, up-to-the-minute intelligence on critical digital threats, emerging vulnerabilities, and defensive innovations.

## Features

*   **Real-Time Data Intelligence:** Integrates directly with the robust GNews API to fetch live, up-to-the-minute articles. This ensures the dashboard consistently reflects the most current threat intelligence and industry news without manual intervention.
*   **Categorized Threat Feeds:** Organizes vast amounts of global data into highly specific, dedicated intelligence streams. Users can seamlessly navigate between focused sectors, including Cloud Security infrastructure, AI Security & Deepfakes, emerging Malware strains, and underground Dark Web activity.
*   **Custom CORS Bypass Architecture:** Utilizes Vercel Serverless Rewrites to securely and invisibly route API requests. This completely bypasses strict browser Cross-Origin Resource Sharing (CORS) policy blocks by proxying requests through a serverless backend, ensuring a stable, uninterrupted data flow without the need for paid third-party proxies.
*   **Modern, Immersive UI:** Built with React and structured for peak front-end performance. The application features a sleek, responsive, dark-themed aesthetic inspired by modern hacker and terminal environments, ensuring optimal readability and an intuitive user experience across both desktop and mobile devices.

## Tech Stack
* **Frontend:** React, Vite
* **API:** GNews API
* **Hosting & Proxy:** Vercel (with custom `vercel.json` rewrites)

## How to Run Locally

1. **Clone the repository:**
   `git clone https://github.com/yashsharma280706/cyber-radar.git`

2. **Install dependencies:**
   `npm install`

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API key:
   `VITE_NEWS_API_KEY=your_gnews_api_key_here`

4. **Start the development server:**
   `npm run dev`
