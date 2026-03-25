# AI Cyber Security Assistant - Vercel Deployment Guide

This project is optimized for deployment on [Vercel](https://vercel.com).

## Deployment Steps

1. **Push to GitHub/GitLab/Bitbucket**: Ensure your code is in a remote repository.
2. **Import to Vercel**: Connect your repository to Vercel.
3. **Configure Environment Variables**:
   - In the Vercel project settings, add `GEMINI_API_KEY`.
   - You can get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
4. **Build Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Deploy**: Click "Deploy" and Vercel will handle the rest.

## Security Note
The current configuration injects the `GEMINI_API_KEY` into the client-side bundle via Vite's `define` feature. For production use, it is recommended to move API calls to a server-side function (Vercel Serverless Functions) to keep your API key secure.

## Project Structure
- `vercel.json`: Handles Single Page Application (SPA) routing.
- `vite.config.ts`: Configured to pass environment variables to the frontend.
