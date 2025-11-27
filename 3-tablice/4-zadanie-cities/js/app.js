const miastaWPolsce = cities.filter(c => c.country === "Poland").length;
console.log(miastaWPolsce);

const liczbaLudzi = cities.reduce((suma, c) => suma + c.people, 0);
console.log(liczbaLudzi);

const pierwsze10k = cities.find(c => c.people > 10000);
console.log(pierwsze10k);

const srednia = liczbaLudzi / cities.length;
const powyzejSredniej = cities.filter(c => c.people > srednia);
console.log(powyzejSredniej);

const nazwy10k = cities
    .filter(c => c.people > 10000)
    .map(c => c.name);

console.log(nazwy10k);

const duze = cities.filter(c => c.people > 10000).length;
const male = cities.length - duze;

if (duze > male) {
    console.log("Więcej jest miast > 10000 ludzi");
} else if (male > duze) {
    console.log("Więcej jest małych miast");
} else {
    console.log("Po równo");
}
