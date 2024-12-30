// Creates reference to form and to elements H3 and H4 (anwsers)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// Creates an event "Ouvinte" triggering when the submit button is clicked
frm.addEventListener("submit", (e) => {
    const title = frm.inTitle.value; // gets fields content
    const duration = Number(frm.inDuration.value);

    const hours = Math.floor(duration / 60); // round the result down
    const minutes = duration % 60; // gets the remainder of the division
    
    resp1.innerText = title; // Shows the awnsers
    resp2.innerText = `${hours} hora(s) e ${minutes} minuto(s)`;
    
    e.preventDefault() // avoids sending the form 

});
