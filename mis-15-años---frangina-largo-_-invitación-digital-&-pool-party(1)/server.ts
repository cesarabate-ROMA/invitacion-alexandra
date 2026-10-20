import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve public files directly
app.use(express.static(path.join(process.cwd(), 'public')));

// API Route to upload & persist the exact, unaltered photo to disk permanently
app.post('/api/upload-photo', (req, res) => {
  try {
    const { imageBase64, filename = '1000047326.jpg' } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const targetPaths = [
      path.join(process.cwd(), 'public', filename),
      path.join(process.cwd(), 'public', 'images', filename),
      path.join(process.cwd(), 'src', 'assets', 'images', filename),
      path.join(process.cwd(), 'dist', filename),
      path.join(process.cwd(), 'dist', 'images', filename),
    ];

    for (const targetPath of targetPaths) {
      try {
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(targetPath, buffer);
      } catch (err) {
        console.error(`Failed to write to ${targetPath}:`, err);
      }
    }

    console.log(`[Upload] Successfully saved unaltered photo to disk as ${filename}`);
    return res.json({ success: true, message: 'Photo saved permanently to disk', path: `/${filename}` });
  } catch (err: any) {
    console.error('Error saving image:', err);
    return res.status(500).json({ error: err.message });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  const distPath = path.join(process.cwd(), 'dist');

  if (isProd && fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Full-stack server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
