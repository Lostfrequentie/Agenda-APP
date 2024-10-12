// server.js

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// Proxy-endpoint voor ICAL
app.get('/proxy', async (req, res) => {
    const icalUrl = 'https://efteling.rooster.nl/InPlanningServiceAdmin/ICalService?key=9rbd5oqs5el7jzh3rxv0xbc6revc4zbd';

    try {
        // Haal de ICAL-data op
        const response = await fetch(icalUrl);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send('Error fetching ICAL data');
    }
});

// Statische bestanden (zoals HTML) bedienen
app.use(express.static('public'));

// Server starten
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
