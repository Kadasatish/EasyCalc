async function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    const response = await fetch(`/api/calculate?num1=${num1}&num2=${num2}&operation=${operation}`);
    const data = await response.json();

    document.getElementById("result").innerText = data.result || "Error";
}
