countries.forEach(c => console.log(c.name));

const totalPopulation = countries.reduce((sum, c) => sum + c.population, 0);
console.log("Suma ludności:", totalPopulation);
 
const avgPopulation = totalPopulation / countries.length;
console.log("Średnia ludność:", avgPopulation);

const positive = countries.filter(c => c.growth > 0).length;
console.log("Dodatni wzrost:", positive);

const negative = countries.filter(c => c.growth < 0).length;
console.log("Ujemny wzrost:", negative);

const totalArea = countries.reduce((sum, c) => sum + c.area, 0);
const percent = (totalArea / world_area) * 100;

console.log("Procent powierzchni Ziemi:", percent);


const fertilityValues = countries
    .filter(c => c.fertility_rate !== null)
    .map(c => c.fertility_rate);

const avgFertility = fertilityValues.reduce((s, x) => s + x, 0) / fertilityValues.length;

console.log("Średnia dzietność:", avgFertility);

const avgAge = countries.reduce((sum, c) => sum + c.median_age, 0) / countries.length;
console.log("Średni wiek na świecie:", avgAge);

const poland = countries.find(c => c.name === "Poland");
console.log(poland);

const isOlder = poland.median_age > avgAge;
console.log(isOlder);
