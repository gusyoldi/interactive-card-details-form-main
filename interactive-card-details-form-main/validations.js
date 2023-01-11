// element.innerHTML = "";

/* Form inputs */
const form = document.querySelector("form");
const cardNameInput = document.querySelector("#card-name");
const cardNameDiv = document.querySelector(".name-error");

messages = [
  { cardName: "Debe introducir el nombre del titular de la tarjeta" },
  { cardNumber: "Debe introducir el número de su tarjeta" },
];

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
})

// function messageErrorMaker(arr) {
//   // const message = arr.find((el) => 
//   const error = ` <br><span class="error">${messages}</span> `;
//   return error
// }

// console.log(messageErrorMaker(messages, messages.cardName));
console.log(messageErrorMaker(messages));

cardNameInput.addEventListener("focusout", () => {
  // console.log("click");
  if (cardNameInput.textContent === "")
    cardNameDiv.innerHTML += messageErrorMaker(messages["cardName"]);
  // console.log(messageErrorMaker(messages.cardName));
});

//PreventDefault:

// form.addEventListener('submit', (e) => {
//   if (fname.value === '' || lname.value === '') {
//     e.preventDefault();
//     para.textContent = 'You need to fill in both names!';
//   }
