module.exports = (req, res) => {
    const { num1, num2, operation } = req.query;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (operation) {
        case "add":
            result = n1 + n2;
            break;
        case "subtract":
            result = n1 - n2;
            break;
        case "multiply":
            result = n1 * n2;
            break;
        case "divide":
            if (n2 === 0) {
                return res.status(400).json({ result: "Cannot divide by zero" });
            }
            result = n1 / n2;
            break;
        default:
            return res.status(400).json({ result: "Invalid operation" });
    }

    res.status(200).json({ result });
};
