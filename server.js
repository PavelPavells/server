const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Сервер успешно загружен, добавьте '/bolid' в адресную строку и нажмите Enter, чтобы обрабатывать запросы.");
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
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        res.status(400).send({"key": "no data"});
    } else if(req.body.data) {
        res.status(200).json("data", req.body.data);
    }
 });

const port = 8099 || process.env.PORT;

app.listen(port, () => console.log(`Server up and running on port: ${port}`));
