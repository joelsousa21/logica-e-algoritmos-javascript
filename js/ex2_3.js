// Creates reference to the form and response elements
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// Creates a "Ouvinte" to an event triggering when the submit button is clicked
frm.addEventListener("submit", (e) => {
    const vehicle = frm.inVehicle.value; // gets the fields content
    const price = Number(frm.inPrice.value);

    const entranceMoney = price * 0.50; // calculates the entrance value
    const installment = (price * 0.50) / 12; // calculates the installment value

    resp1.innerText = `Promoção:  ${vehicle}`; // show the answers
    resp2.innerText = `Entrada de R$: ${entranceMoney.toFixed(2)}`;
    resp3.innerText = `+12x de R$: ${installment.toFixed(2)}`;

    e.preventDefault(); // avoids sending the form 
})