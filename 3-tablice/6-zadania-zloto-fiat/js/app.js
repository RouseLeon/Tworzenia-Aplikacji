const totalSaved = payments.reduce((sum, p) => sum + p.avg / 3, 0);

console.log("Zaoszczędzone pieniądze:", totalSaved.toFixed(2), "PLN");

const purchasedCoins = payments.map(p => {
    const goldPrice = gold.find(g => g.endDateTime.startsWith(p.date))?.close;
    if (!goldPrice) return 0; 
    return (p.avg / 3) / goldPrice; 
});

const totalCoins = purchasedCoins.reduce((sum, c) => sum + c, 0);
console.log("Łączna liczba zakupionych monet:", totalCoins.toFixed(4));

const latestGoldPrice = gold[gold.length - 1].close;
const totalValue = totalCoins * latestGoldPrice;

console.log("Dzisiejsza wartość zakupionych monet:", totalValue.toFixed(2), "PLN");
