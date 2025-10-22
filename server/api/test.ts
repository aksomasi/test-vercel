import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.json({ message: 'API is working', method: 'GET' });
  }

  if (req.method === 'POST') {
    const { value } = req.body || {};
    const response = `Hello ${value || 'World'}`;
    return res.json({ message: response });
  }

  return res.status(405).json({ error: 'Method not allowed', method: req.method });
}