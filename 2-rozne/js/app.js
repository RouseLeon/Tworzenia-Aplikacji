function countWord(txt) {
  if (!txt) return 0;
  return txt.trim().split(/\s+/).length;
}

const userTxt = prompt("Podaj tekst:");

if (!userTxt) {
  console.log("nie mam co liczyć");
} else {
  console.log(`Tekst "${userTxt}" składa się z ${countWord(userTxt)} wyrazów`);
}

function fixName(name) {
  if (!name) return null;
  name = name.toLowerCase();
  return name[0].toUpperCase() + name.slice(1);
}

const userName = prompt("Podaj imię:");

if (!userName) {
  console.log("nic nie wpisano");
} else {
  const fixed = fixName(userName);
  console.log(`Imię ${fixed} rozpoczyna się od litery ${fixed[0]}`);
}

function fileInfo(file) {
  if (!file || !file.includes(".")) return false;
  const parts = file.split(".");
  if (parts.length < 2) return false;

  return {
    name: parts.slice(0, -1).join("."), 
    extension: parts[parts.length - 1]
  };
}

function generateID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let out = "";
  for (let i = 0; i < 20; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function printNumbers(nr) {
  let txt = "";
  for (let i = 1; i <= nr; i++) {
    txt += i;
  }
  return txt;
}

function doSomething(name, month) {
  if (!month) return `${name} uczy się JS`;

  const m = month.toLowerCase();

  if (["grudzień","grudzien","styczeń","styczen","luty"].includes(m))
    return `${name} jezdzi na sankach`;

  if (["marzec","kwiecień","kwiecien","maj"].includes(m))
    return `${name} chodzi po kaluzach`;

  if (["czerwiec","lipiec","sierpień","sierpien"].includes(m))
    return `${name} sie opala`;

  if (["wrzesień","wrzesien","październik","pazdziernik","listopad"].includes(m))
    return `${name} zbiera liscie`;

  return `${name} uczy się JS`;
}

console.log(doSomething("Ala", "styczeń"));

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(generateRandom(1, 20));
}

const biggerThan10 = arr.filter(n => n > 10).length;

if (biggerThan10 >= 5) console.log("udało się");
else console.log("niestety nie");

function sortTextBySeparator(text, sep) {
  return text
    .split(sep)
    .sort()
    .join(sep);
}


function printBorderText(txt, max) {
  if (txt.length > max) {
    txt = txt.slice(0, max) + "...";
  }

  const lineLength = txt.length + 4;
  const top = "╔" + "═".repeat(lineLength - 2) + "╗";
  const bottom = "╚" + "═".repeat(lineLength - 2) + "╝";

  console.log(top);
  console.log(`║  ${txt}  ║`);
  console.log(bottom);
}

const min = 1;
const max = 1000;

let user = Number(prompt(`Podaj liczbę z przedziału ${min}-${max}`));

if (isNaN(user) || user < min || user > max) {
  console.log("podana wartość jest błędna");
} else {
  let counter = 0;
  while (true) {
    counter++;
    const rnd = generateRandom(min, max);
    if (rnd === user) break;
  }
  console.log(`Liczba iteracji: ${counter}`);
}

function checkFemale(name) {
  return name.toLowerCase().endsWith("a");
}

function countWomanInTable(arr) {
  let count = 0;

  for (const person of arr) {
    const firstName = person.split(" ")[0];
    if (checkFemale(firstName)) count++;
  }
  return count;
}

const users = [
  "Ania Nowak",
  "Piotr Kowalski",
  "Bartek Kosecki",
  "Natalia Nowak",
  "Weronika Piotrowska",
  "Agata Karolak",
  "Tomasz Nowak",
  "Mateusz Kowalski",
  "Marcin Kotecki",
  "Beata Lecka",
  "Katarzyna Małecka"
];

console.log(countWomanInTable(users));

function monthName(nr) {
  const months = [
    "styczeń","luty","marzec","kwiecień","maj","czerwiec",
    "lipiec","sierpień","wrzesień","październik","listopad","grudzień"
  ];

  if (typeof nr !== "number" || nr < 1 || nr > 12) return false;

  return months[nr - 1];
}

function checkPalindrom(txt) {
  const normalized = txt.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

function mix(txt) {
  let out = "";
  for (let i = 0; i < txt.length; i++) {
    out += i % 2 === 0 ? txt[i].toUpperCase() : txt[i].toLowerCase();
  }
  return out;
}


function arraySummary(arr) {
  const summary = { sum: 0 };

  for (const num of arr) {
    summary.sum += num;
    summary[num] = (summary[num] || 0) + 1;
  }
  return summary;
}


const log = (function () {
  let counter = 1;
  return function (txt) {
    console.log(`${counter}. ${txt}`);
    counter++;
  };
})();

// log("To jest tekst");
// log("Drugi tekst");
