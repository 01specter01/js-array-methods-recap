console.log("Kassenproblem");
function calculateChange(price, amountpaid) {
    let changeback = amountpaid - price;
    var change = {};
    let types = [
        "500",
        "200",
        "100",
        "50",
        "20",
        "10",
        "5",
        "2",
        "1",
        "0.5",
        "0.2",
        "0.1",
        "0.05",
        "0.02",
        "0.01",
    ];
    let values = [
        500.0, 200.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.2, 0.1,
        0.05, 0.02, 0.01,
    ];
    var amount;
    for (let i = 0; i < values.length; i++) {
        amount = Math.floor(changeback / values[i]);
        amount;
        if (amount > 0) {
            change[types[i]] = amount;
            changeback = changeback % values[i];
        }
    }
    return change;
}
console.log(calculateChange(3.75, 50));
console.log(calculateChange(4.5, 20)); // returns: 1 x 10 €, 1 x 5 €, 1 x 0.5 €
