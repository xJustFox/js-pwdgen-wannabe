// Creata variabile "name"
let name = prompt("Inserisci il tuo nome");
document.getElementById("name").innerHTML = name;
console.log(document.getElementById("name").innerHTML);

// Creata variabile "surname"
let surname = prompt("Inserisci il tuo cognome");
document.getElementById("surname").innerHTML = surname;
console.log(surname);

// Creata variabile "color"
let color = prompt("Inserisci il tuo colore preferito");
document.getElementById("color").innerHTML = color;
console.log(color);

// Creata la variabile "number"
const number = 23;
console.log(number);

// Concatenate le variabili 
document.getElementById("password").innerHTML = `${name}${surname}${color}${number}`;
console.log(document.getElementById("password").innerHTML);