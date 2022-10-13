const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (averageDolphins, averagegKoalas) => {
    if (averageDolphins >= 2 * averagegKoalas) {
        console.log(`Dolphins win 🏆 (${averageDolphins} vs. ${averagegKoalas}).`);
    }
    else if (averagegKoalas >= 2 * averageDolphins) {
        console.log(`Koalas win 🏆 (${averagegKoalas} vs. ${averageDolphins}).`);
    }
    else {
        console.log(`No team wins.`)
    }
}

let averageDolphins = calcAverage(44, 23, 71);
let averagegKoalas = calcAverage(65, 54, 49);
console.log(averageDolphins, averagegKoalas);
checkWinner(averageDolphins, averagegKoalas);

averageDolphins = calcAverage(85, 54, 41);
averagegKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averagegKoalas);
checkWinner(averageDolphins, averagegKoalas);