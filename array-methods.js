console.log("Kassenproblem");
function calculateChange(price, amountpaid) {
    let changeback = (amountpaid - price) * 100;
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
        50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2,
        1,
    ];
    var amount;
    for (let i = 0; i < values.length; i++) {
        amount = Math.floor(changeback / values[i]);
        if (amount > 0) {
            change[types[i]] = amount;
            changeback = changeback - values[i] * amount;
        }
    }
    return change;
}
console.log(calculateChange(3.75, 50));
console.log(calculateChange(4.5, 20)); // returns: 1 x 10 €, 1 x 5 €, 1 x 0.5 €

console.log("WordRank-Bewertungssystem");
function wordRank(sentance) {
    const noSpecialCharacters = sentance.replace(/[^a-zA-Z0-9]/g, " ");
    let splittedSentance = sentance.split("");
    let index = splittedSentance.reduce((acc, curr, i) => {
        if (curr.length > splittedSentance[acc].length) {
            return i;
        }

        return acc;
    }, 0);

    return splittedSentance[index];
}

console.log(wordRank("The quick brown fox ran away in the woodlands."));
