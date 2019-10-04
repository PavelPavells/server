const express = require("express");
const bodyParser = require("body-parser");
//const router = express.Router();
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
    typeof req.body.command == "undefined" || req.body.command == null
        ? res.status(400).json({"command": "isRequired"})
            : req.body.device == "undefined" || req.body.device == null
        ? res.status(400).json({"device": "isRequired"})
            : req.body.person == "undefined" || req.body.person == null
        ? res.status(400).json({"person": "isRequired"})
    : res.status(200).send(req.body);
 });
const port = 8099 || process.env.PORT;
app.listen(port, () => console.log(`Server up and running on port: ${port}`));