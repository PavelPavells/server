const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({"key": "No data"});
})

app.get('/', (req, res) => {
    throw new Error('oops')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Something broke!')
})

app.post("/bolid", (req, res, next) => {
    console.log(req.body);
    if(typeof req.body == 'undefined' || req.body == null) {
        res.status(200).json({"key": "no data"});
    } else {
        res.json(req.body);
    }
 });

const port = 8099 || process.env.PORT;

app.listen(port, () => console.log(`Server up and running on port: ${port}`));
