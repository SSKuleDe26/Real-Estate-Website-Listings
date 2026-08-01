function calculateMortgage() {

    const price = parseFloat(document.getElementById("price").value);
    const down = parseFloat(document.getElementById("downPayment").value);
    const rate = parseFloat(document.getElementById("interest").value);
    const years = parseInt(document.getElementById("years").value);

    if (
        isNaN(price) ||
        isNaN(down) ||
        isNaN(rate) ||
        isNaN(years)
    ) {

        alert("Please complete every field.");
        return;

    }

    if (price <= 0) {

        alert("Home price must be greater than $0.");
        return;

    }

    if (down >= price) {

        alert("Down payment must be less than the home price.");
        return;

    }

    if (rate <= 0) {

        alert("Interest rate must be greater than 0%.");
        return;

    }

    const monthlyRate = rate / 100 / 12;
    const loan = price - down;
    const months = years * 12;

    const payment =
        (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("payment").textContent =
        "$" + payment.toFixed(2);

    drawCanvas(price, down);

}
function drawCanvas(price, down) {

    const canvas = document.getElementById("loanCanvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const loan = price - down;

    const percent = Math.max(
        0,
        Math.min(
            400,
            (loan / price) * 400
        )
    );

    ctx.strokeStyle = "#000";
    ctx.strokeRect(50, 80, 400, 40);

    ctx.fillStyle = "green";
    ctx.fillRect(50, 80, percent, 40);

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";

    ctx.fillText("Loan Amount", 165, 60);

    ctx.fillText(
        "$" + loan.toLocaleString(),
        155,
        150
    );

}