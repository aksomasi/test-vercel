# Simple Test Project

## Local Development

### Server
```bash
cd server
npm install
npm run dev
```

### Client
```bash
cd client
npm install
npm start
```

## Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

## Usage
1. Click "Test Button" 
2. See alert with "Hello World"

## API
- POST `/api/test` with `{ value: "World" }` returns `{ message: "Hello World" }`

## Structure
- `server/api/test.ts` - Vercel serverless function
- `client/` - Angular app
- `vercel.json` - Deployment configuration