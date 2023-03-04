const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/post", (req, res) => {
    console.log(req.body);

    res.status(201).send("Save is succesiful")
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));