import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Initialize Gemini SDK if API key is present
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// API endpoint for AI Coding Tutor
app.post('/api/ai-tutor', async (req, res) => {
  try {
    const { prompt, language = 'so', codeContext = '' } = req.body;

    if (!ai) {
      // Demo response if Gemini API key is not configured
      return res.json({
        reply: language === 'so' 
          ? `[AI Tutor - DEMO MODE]: Warkaaga waan helay: "${prompt}". Fadlan ku dar furaha GEMINI_API_KEY si aad u hesho caawimada buuxda ee AI-ga ee af Soomaaliga ah! (Coodkaaga lafaguray: ${codeContext ? 'Haa' : 'Maya'})`
          : `[AI Tutor - DEMO MODE]: Received your prompt: "${prompt}". Please configure GEMINI_API_KEY for full AI tutoring in Somali!`,
        isDemo: true
      });
    }

    const systemInstruction = language === 'so'
      ? `Waxaad tahay macalin coding oo khibrad leh oo ka tirsan barxadda Coler-Code. U jawaab ardayda Soomaaliyeed ee baranaya programming-ka (HTML, CSS, JavaScript, Python, iwm) si sahal ah, dhiirigelin leh, oo af Soomaali ah. Haddii ay khaladaad code soo gudbiyaan, sharax sababta iyo sida loo saxo. Isticmaal tusaalayaal cad oo gaaban.`
      : `You are an expert coding tutor for Coler-Code platform. Answer students learning programming in a friendly, encouraging, and clear manner. If they provide code errors, explain why and how to fix them with concise examples.`;

    const fullPrompt = `${codeContext ? `Code Context:\n\`\`\`\n${codeContext}\n\`\`\`\n\n` : ''}User Question: ${prompt}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({
      reply: response.text || (language === 'so' ? 'Waan ka xumahay, jawaab lama helin.' : 'Sorry, no response generated.'),
      isDemo: false
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      error: error.message || 'Internal Server Error',
      reply: req.body?.language === 'so' 
        ? 'Cillad ayaa dhacday markii lala hadlayay AI Tutor. Fadlan mar kale isku day.'
        : 'An error occurred while talking to AI Tutor. Please try again.'
    });
  }
});

// Setup Vite middleware in development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Coler-Code server running on http://0.0.0.0:${port}`);
  });
}

startServer();
