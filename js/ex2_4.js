// Creates reference to the form and response elements
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Creates a "Ouvinte" to an event trigerring when the submit button is clicked
frm.addEventListener("submit", (e) => {
const kilo = Number(frm.inKilo.value);
const gramme = Number(frm.inGramme.value);

const price = (kilo / 1000) * gramme // Calculates the value to be paid
resp.innerText = `Valor a pagar R$: ${price.toFixed(2)}` // Shows the answer

e.preventDefault() // Avoids sending the form

});