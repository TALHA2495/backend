# Vercel Deployment Guide

## Changes Made to Fix Deployment Error

### 1. Updated `vercel.json`
- Removed deprecated `version: 2`, `builds`, and `routes` configuration
- Updated to modern `rewrites` format for serverless functions

### 2. Updated `server.js`
- Modified to only call `app.listen()` in local development (not production)
- Properly exports the Express app for Vercel's serverless environment

## Environment Variables Setup

Before deploying, you **MUST** add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
MONGO_URI=mongodb+srv://jutt555:12345678Falcon@clusterdechub01.wmobjm6.mongodb.net/?appName=ClusterDecHub01
JWT_SECRET=verysuperfastandfurious5647
NODE_ENV=production
```

⚠️ **IMPORTANT**: Make sure to set these for **Production**, **Preview**, and **Development** environments.

## Deployment Steps

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Deploy via Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository in Vercel dashboard
3. Vercel will automatically detect the configuration
4. Add environment variables before deploying
5. Deploy!

## Testing After Deployment

Once deployed, test these endpoints:

1. **Root endpoint**: `https://your-app.vercel.app/`
   - Should return: "Product API is running"

2. **Auth endpoints**: `https://your-app.vercel.app/api/auth/...`

3. **Product endpoints**: `https://your-app.vercel.app/product/...`

## Common Issues & Solutions

### Issue: "FUNCTION_INVOCATION_FAILED"
**Solution**: This was caused by the deprecated config format. Now fixed!

### Issue: Database connection timeout
**Solution**: 
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0) or add Vercel's IP ranges
- Check that MONGO_URI is correctly set in Vercel environment variables

### Issue: 500 Internal Server Error
**Solution**:
- Check Vercel function logs for specific errors
- Ensure all environment variables are set
- Verify MongoDB connection string is correct

## Local Development

To run locally:
```bash
npm run dev
```

The server will run on `http://localhost:8000`
