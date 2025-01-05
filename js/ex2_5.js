// Creates reference to the form and response elements
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Creates a "Ouvint" to an event trigerring when the submit button is clicked
frm.addEventListener("submit", (e) => {

    const medicine = frm.inMedicine.value;
    const price = Number(frm.inPrice.value);

    const value = (price * 2).toFixed(2);
    const discount = value % 2;

    promotion = value - discount;
    

    resp1.innerText = `Promoção de: ${medicine}`;
    resp2.innerText = `Leve 2 por apenas R$ ${promotion}`

    e.preventDefault();

});