const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
try{
  fetch(`https://www.floatrates.com/daily/${currency_one}.json`)
  .then(function (response){
    response.json().then(function(json){
      const rate = json[currency_two.toLowerCase()].rate;
      rateEl.innerText = `${currency_one} = ${rate.toFixed(2)} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    } )
  } )
}
catch(error){
  console.log(error)
}
} 
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const change = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = change;
  calculate();
});

calculate();
