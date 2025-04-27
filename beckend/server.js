const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Endpoint untuk mengambil data TikTok
app.get('/api/tiktok-profile', async (req, res) => {
    try {
        const username = req.query.username;
        if (!username) {
            return res.status(400).json({ error: 'Username is required.' });
        }

        const apiUrl = `https://fastrestapis.fasturl.cloud/stalk/tiktok/profile?username=${encodeURIComponent(username)}`;
        const response = await axios.get(apiUrl);

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch TikTok profile.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
