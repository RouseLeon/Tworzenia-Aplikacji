class User {
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.loginDates = [];
        this.active = true;
    }

    logIn() {
        const date = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
        this.loginDates.push(date);
    }

    showLoginDates() {
        this.loginDates.forEach(d => console.log(d));
    }

    showDetails() {
        for (let key in this) {
            console.log(key, this[key]);
        }
    }

    toggleActive() {
        this.active = !this.active;
    }
}

const users = [
    new User("nick1", "Jan", "Kowalski", "jan@example.com", "editor"),
    new User("nick2", "Anna", "Nowak", "anna@example.com", "reader"),
    new User("nick3", "Marek", "Wiśniewski", "marek@example.com", "admin")
];

users[0].logIn();
users[0].showLoginDates();
users[0].toggleActive();
users[0].showDetails();

const names = [ "Baraka", "Jax", "Johnny Cage", "Kitana", "Kung Lao", "Liu Kang", "Mileena", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sub-Zero"];

class Fighter {
    constructor(name, live=20, power=3) {
        this.name = name;
        this.live = live;
        this.power = power;
    }

    attack(who) {
        if(Math.random() < 0.5) {
            who.live -= this.power;
            if(who.live < 0) who.live = 0;
            log.push(`${this.name} zaatakował ${who.name}. ${this.name}: ${this.live}, ${who.name}: ${who.live}`);
        } else {
            log.push(`${this.name} nie trafił w ${who.name}.`);
        }
    }
}

const log = [];
const fighters = names.map(n => new Fighter(n));
let leftFighter = null;
let rightFighter = null;

function getFighter() {
    if(fighters.length === 0) return null;
    return fighters.splice(Math.floor(Math.random()*fighters.length),1)[0];
}

function loop() {
    if(!leftFighter) leftFighter = getFighter();
    if(!rightFighter) rightFighter = getFighter();
    if(!leftFighter || !rightFighter) {
        console.log("Turniej zakończony");
        return false;
    }

    leftFighter.attack(rightFighter);
    rightFighter.attack(leftFighter);

    if(leftFighter.live <= 0) {
        leftFighter = null;
        rightFighter.live = 20; 
    }

    if(rightFighter.live <= 0) {
        rightFighter = null;
        leftFighter.live = 20;
    }

    console.clear();
    console.log(log.join("\n"));

    if(fighters.length === 0 && (!leftFighter || !rightFighter)) {
        console.log("Zwycięzca turnieju:", leftFighter || rightFighter);
        return false;
    }

    setTimeout(loop, 100);
}

String.prototype.sortText = function(char) {
    return this.split(char).sort().join(char);
};

console.log("Marcin-Ania-Piotrek-Beata".sortText('-')); 

String.prototype.mirror = function() {
    return this.split("").reverse().join("");
};

console.log("Ala ma kota".mirror()); 

Array.prototype.sum = function() {
    return this.reduce((a,b) => a+b, 0);
};

Array.prototype.sortNr = function() {
    return this.sort((a,b)=>a-b);
};

// Test
console.log([1,2,3].sum()); // 6
console.log([1,1.2,11,22,2.1].sortNr()); 
