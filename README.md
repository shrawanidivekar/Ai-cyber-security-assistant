# AI Cyber Security Assistant - Deployment Guide

This project is optimized for a seamless **GitHub to Vercel** deployment flow.

## 🚀 Deployment Steps

### 1. Push to GitHub
- Create a new repository on [GitHub](https://github.com).
- Push your local code to the repository.

### 2. Connect to Vercel
- Log in to [Vercel](https://vercel.com).
- Click **"Add New"** > **"Project"**.
- Import your GitHub repository.

### 3. Configure Environment Variables
- In the Vercel project settings, add a new Environment Variable:
  - **Key**: `GEMINI_API_KEY`
  - **Value**: Your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
- This is required for the AI scanning and threat intelligence features to work.

### 4. Build Settings
Vercel should automatically detect the settings, but ensure they match:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 5. Deploy
- Click **"Deploy"**. Vercel will build and host your application.

## 🛠️ Project Configuration
- `vercel.json`: Handles Single Page Application (SPA) routing to prevent 404s on page refreshes.
- `vite.config.ts`: Configured to inject environment variables into the frontend.
- `.env.example`: A template for local development environment variables.

## 🔒 Security Note
The current configuration injects the `GEMINI_API_KEY` into the client-side bundle. For production use with sensitive data, it is recommended to move AI calls to a server-side function (Vercel Serverless Functions) to keep your API key hidden from the browser.
