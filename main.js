const form = document.querySelector("form");
const cards = document.querySelectorAll(".form-content");
const button = document.querySelectorAll(".btn");

let formValues = {};

let state = {
  id: 1,
  counter: 0,
};

function submitForm(e) {
  e.preventDefault();
  console.log(cards);
}

function getFormValues(e) {
  formValues = { ...formValues, [e.target.name]: e.target.value };
}

function showUI() {
  if (cards.length) {
    cards.forEach((item, idx) => {
      item.classList.toggle("active", idx === state.id);
    });
  }
}

function inrementDecrementCount(e) {
  if (e.target.classList.contains("next")) {
    state.counter = state.counter + 1;
    state.id = state.counter;
    showUI();
    console.log(formValues);
  } else if (e.target.classList.contains("previous")) {
    state.counter = state.counter - 1;
    state.id = state.counter;
    showUI();
  } else {
    showUI();
  }
}

// Add Event Listeners
form.addEventListener("submit", submitForm);
form.addEventListener("change", getFormValues);
button.forEach((btn) => btn.addEventListener("click", inrementDecrementCount));
