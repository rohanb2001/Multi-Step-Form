const form = document.querySelector("form");
const cards = document.querySelectorAll(".form-content");
const button = document.querySelectorAll(".btn");
const header = document.getElementById("title");
const allDetails = document.querySelector(".content");

let formValues = {};

let state = {
  id: 0,
  counter: 0,
};

function submitForm(e) {
  e.preventDefault();
  console.log(formValues);
}

function getFormValues(e) {
  formValues = { ...formValues, [e.target.name]: e.target.value };
}

function overAllDetails() {
  let str = `
      <h3>First Name : ${formValues.first}</h3>
      <h3>Last Name: ${formValues.last}</h3>
      <h3>Full Name : ${formValues.first} ${formValues.last}</h3>
      <p>Email: ${formValues.email}</p>
      <p>Occupation : ${formValues.occupation}</p>
      <p>City : ${formValues.city}</p>
      <p>Bio : ${formValues.bio}</p>
      `;

  allDetails.innerHTML = str;
}

function showUI() {
  if (cards.length) {
    cards.forEach((item, idx) => {
      item.classList.toggle("active", idx === state.id);
    });
  }
}

showUI();

function changeHeader(idNo) {
  if (idNo === 1) {
    header.textContent = "Personal Details";
  } else if (idNo === 2) {
    header.textContent = "Final Overview";
  } else if (idNo === 3) {
    header.textContent = "Thank You";
  } else {
    return;
  }
}

function inrementDecrementCount(e) {
  if (e.target.classList.contains("next")) {
    state.counter = state.counter + 1;
    state.id = state.counter;
    if (state.id === 2) {
      overAllDetails();
    }
    showUI();
    changeHeader(state.counter);
    console.log(state.id);
  } else if (e.target.classList.contains("previous")) {
    state.counter = state.counter - 1;
    state.id = state.counter;
    showUI();
    changeHeader(state.id);
  } else {
    showUI();
    changeHeader(state.id);
  }
}

// Add Event Listeners
form.addEventListener("submit", submitForm);
form.addEventListener("change", getFormValues);
button.forEach((btn) => btn.addEventListener("click", inrementDecrementCount));
