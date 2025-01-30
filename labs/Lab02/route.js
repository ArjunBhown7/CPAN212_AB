const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the router");
});

router.get("/name", (req, res) => {
    res.send("Arjun");
})

router.get("/greeting", (req, res) => {
    res.send("Arjun. N01586664");
})

router.get("/add/:x/:y", (req, res) => {
    res.send(JSON.stringify(parseFloat(req.params.x) + parseFloat(req.params.y)))
})

router.get("/calculate/:a/:b/:op", (req, res) => {
    const op = req.params.op;
    switch (op) {
        case '+':
            res.send(JSON.stringify(parseFloat(req.params.a) + parseFloat(req.params.b)));
            break;
        case '-':
            res.send(JSON.stringify(parseFloat(req.params.a) - parseFloat(req.params.b)));
            break;
        case '*':
            res.send(JSON.stringify(parseFloat(req.params.a) * parseFloat(req.params.b)));
            break;
        case '/':
            if (parseFloat(req.params.b) === 0) {
                res.status(400).send("Cannot divide by zero");
            } else {
                res.send(JSON.stringify(parseFloat(req.params.a) / parseFloat(req.params.b)));
            }
            break;
        case '**':
            res.send(JSON.stringify(parseFloat(req.params.a) ** parseFloat(req.params.b)));
            break;
        default:
            res.status(400).send("Invalid operator");
            break;
    }
})

module.exports = router;
