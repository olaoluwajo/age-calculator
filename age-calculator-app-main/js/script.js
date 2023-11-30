//select all input id
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

//select all error prompt
const dayError = document.querySelector(".error__day");
const monthError = document.querySelector(".error__month");
const yearError = document.querySelector(".error__year");

//select submit button
const submitButton = document.querySelector(".submit__btn");

//select output space
const yearOutput = document.getElementById("year");
const monthOutput = document.getElementById("month");
const dayOutput = document.getElementById("day");

//function to validate input
function validateInput() {
  //get input date
  const inputYear = yearInput.value;
  const inputMonth = monthInput.value;
  const inputDay = dayInput.value;

  //validate input
  if (inputYear < 1900 || inputYear > 2023) {
    yearError.textContent = "Please enter a valid year";
    yearOutput.textContent = "";
  } else {
    yearError.textContent = "";
  }

  if (inputMonth < 1 || inputMonth > 12) {
    monthError.textContent = "Please enter a valid month";
    monthOutput.textContent = "";
  } else {
    monthError.textContent = "";
  }

  if (inputDay < 1 || inputDay > 31) {
    dayError.textContent = "Please enter a valid day";
    dayOutput.textContent = "";
  } else {
    dayError.textContent = "";
  }
}

//add event listener to input

yearInput.addEventListener("input", validateInput);
monthInput.addEventListener("input", validateInput);
dayInput.addEventListener("input", validateInput);

//function to calculate age

function calculateAge() {
  //get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const rawMonth = currentDate.getMonth() + 1;
  const currentMonth = rawMonth < 10 ? "0" + rawMonth : rawMonth;
  const currentDay = currentDate.getDate();

  //get input date
  const inputYear = yearInput.value;
  const inputMonth = monthInput.value;
  const inputDay = dayInput.value;

  //calculate age
  const ageYear = currentYear - inputYear;
  const ageMonth = currentMonth - inputMonth;
  const ageDay = currentDay - inputDay;

  //display age
  yearOutput.textContent = ageYear;
  monthOutput.textContent = ageMonth;
  dayOutput.textContent = ageDay;
}

//add event listener to submit button

submitButton.addEventListener("click", calculateAge);
