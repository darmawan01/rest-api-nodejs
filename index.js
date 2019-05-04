import express from 'express';

// POST, GET, PUT, DELETE
const app = express()
    app.get('/', (req, res) => {
        const data = {
            "Messages": "Hy Guys !!!",
            "Nama": "Darmawan"
        };

        res.json(data)
    });

app.listen(5001, (err) => {
    if (err) console.log(err);
    console.log("Server running on port 5001");
})