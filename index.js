const express = require('express');
const app = express();
const PORT = 3000;

app.get('/big-json', (req, res) => {
    const bigJson = {
        key1: "value1",
        key2: "value2",
    };
    res.json(bigJson);
});

app.get('/hello', (req, res) => {
    res.send('Selam!');
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
