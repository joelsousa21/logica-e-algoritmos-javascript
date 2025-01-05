// Creates a referente to the form and response elements
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Creates a "Ouvinte" to an event trigerring when the submit button is clicked
frm.addEventListener("submit", (e) => {
    const name = frm.inName.value; // Gets the filds content

    resp.innerText = `Olá ${name}`; // Shows the anwser

    e.preventDefault(); // Avoids sendind the form
})