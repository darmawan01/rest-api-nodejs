import express from 'express';

// POST, GET, PUT, DELETE
const app = express()
    app.get('/', (req, res) => {
        // res.json({"Messages":"Hy Guys !!!"})
        res.sendfile('./index.html')
    });

app.listen(5001, (err) => {
    if (err) console.log(err);
    console.log("Server running on port 5001");
})