const express = require('express');
require('@instana/collector')();
const app = express();
const PORT = 3000;

app.get('/big-json', (req, res) => {
    const bigJson = {

            "loloId": "XXXXX",
            "name": "Use4ds",
            "walletId": "0x32132132132",
            "balance": {
                "avaxBalance": {
                    "totalAmount": "0",
                    "availableAmount": "0",
                    "reservedAmount": "0",
                    "quarantinedAmount": "0"
                },
                "toggensBalance": {
                    "totalAmount": "0",
                    "availableAmount": "0",
                    "reservedAmount": "0",
                    "quarantinedAmount": "0"
                }
            },
            "affiliate": false,
            "showWhitelisting": true,
            "showConditions": true,
            "creationDate": "2023-08-10T08:02:08.359Z",
            "modificationDate": "2023-08-10T08:42:49.333Z",
            "kycVerificationLevel": "UNSPECIFIED",
            "kycExpirationDate": "2023-08-20T08:02:08.243Z",
            "locale": "TR",
            "whitelisting": "NOT_WHITELISTED",
            "customerBalance": {
                "accID": "3233131321",
                "tokenBalances": [
                    {
                        "amount": 0,
                        "name": "Avalanche",
                        "symbol": "AVAX",
                        "address": "0x0000000000000000000000000000000000000000",
                        "date": "2023-08-10T10:45:18.344Z"
                    }
                ]
            }
        }
    ;
    res.json(bigJson);
});

app.get('/hello', (req, res) => {
    res.send('Selam!');
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
