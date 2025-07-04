const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'db.json');

// Save inquiry
// In your server.js
app.post('/api/inquiries', async (req, res) => {
    try {
      const db = JSON.parse(await fs.readFile(DB_PATH));
      const newInquiry = {
        ...req.body,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        status: 'new'
      };
      db.inquiries.push(newInquiry);
      await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
      res.status(201).json(newInquiry);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Get all inquiries
app.get('/api/inquiries', async (req, res) => {
  try {
    const db = JSON.parse(await fs.readFile(DB_PATH));
    res.json(db.inquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));