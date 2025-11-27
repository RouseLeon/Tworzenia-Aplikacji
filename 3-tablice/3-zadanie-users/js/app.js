users.forEach(u => {
    console.log(`${u.name} ${u.surname} -> ${u.email}`);
});

const pelnoletni = users.filter(u => u.age >= 18);
console.log(pelnoletni);

const kobiety = users.filter(u => u.gender === "female");
console.log(kobiety);


const zDoloRem = users.filter(u => u.tags.includes("dolor"));
console.log(zDoloRem);


const wszyscyPelnoletni = users.every(u => u.age >= 18);
console.log(wszyscyPelnoletni);


const ktosPelnoletni = users.some(u => u.age >= 18);
console.log(ktosPelnoletni);


const imionaDuze = users.map(u => u.name.toUpperCase());
console.log(imionaDuze);

const kobietyCount = users.filter(u => u.gender === "female").length;
const mezczyzniCount = users.filter(u => u.gender === "male").length;

console.log("Kobiet:", kobietyCount);
console.log("Mężczyzn:", mezczyzniCount);

if (kobietyCount > mezczyzniCount) {
    console.log("kobiety wygrywają");
} else if (mezczyzniCount > kobietyCount) {
    console.log("mężczyźni wygrywają");
} else {
    console.log("remis");
}
