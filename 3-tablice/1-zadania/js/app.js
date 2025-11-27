const animals = ["pies", "kot", "ryba", "lew", "koala", "mysz"];

function showArray(arr) {
  let sum = 0;

  console.log("== FOR ==");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "-", arr[i].length);
    sum += arr[i].length;
  }

  console.log("== FOR OF ==");
  for (const item of arr) {
    console.log(item, "-", item.length);
  }

  console.log("== forEach ==");
  arr.forEach(el => console.log(el, "-", el.length));

  console.log("Suma liter:", sum);
}

showArray(animals);


function checkPalindrom(txt) {
  const low = txt.toLowerCase();
  return low === low.split("").reverse().join("");
}

console.log(checkPalindrom("kajak")); // true
console.log(checkPalindrom("pies"));  // false

const names = [
  "Marcin", "Ania", "Monika", "Piotr", "Beata",
  "ania", "marcin", "piotr", "PIOTR", "ANIA", "MONIKA"
];

function unifyNames(arr) {
  return arr.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}

function countDifferentNames(arr) {
  const obj = {};
  arr.forEach(name => {
    obj[name] = (obj[name] || 0) + 1;
  });
  return obj;
}

const unified = unifyNames(names);
console.log(unified);

console.log(countDifferentNames(unified));


const tab = [
  "xloremipsumdolor",
  "kloremipsum",
  "aloremipsumdol",
  "blor",
  "cloremipsu",
  "gloremip"
];

tab.sort((a, b) => a.length - b.length);

console.log(tab);

const sum = tab.reduce((acc, el) => acc + el.length, 0);

console.log("Suma wszystkich liter:", sum);
