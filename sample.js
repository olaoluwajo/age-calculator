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

//add event listener to submitbutton

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (isEmpty()) {
    alert("please enter a value");
  } else {
    calculateAge();
  }
});

function isEmpty() {
  return (
    dayInput.value === "" || monthInput.value === "" || yearInput.value === ""
  );
}

// create function to validate input

function validateInput() {
  //get the inputDAte values first
  const inputYear = yearInput.value;
  const inputMonth = monthInput.value;
  const inputDay = dayInput.value;

  //then validate input
  //create conditions if the input are less or greater than value

  if (inputYear < 1900 || inputYear > 2023) {
    yearError.textContent = "Enter a valid year";
  } else {
    yearError.textContent = "";
  }
  if (inputMonth < 1 || inputMonth > 12) {
    monthError.textContent = "Enter a valid month";
  } else {
    monthError.textContent = "";
  }
  if (inputDay < 1 || inputDay > 31) {
    dayError.textContent = "Enter a valid year";
  } else {
    dayError.textContent = "";
  }
}
//add event listener to each input

yearInput.addEventListener("input", validateInput);
monthInput.addEventListener("input", validateInput);
dayInput.addEventListener("input", validateInput);

//create function to calculate age

function calculateAge() {
  //get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  //get the input date values again
  const inputYear = yearInput.value;
  const inputMonth = monthInput.value;
  const inputDay = dayInput.value;

  //now calculaete the age difference

  let ageYear = currentYear - inputYear;
  let ageMonth = currentMonth - inputMonth;
  let ageDay = currentDay - inputDay;

  //if the current month is less than the input month then adjust age
  //conditions to check

  if (currentMonth < inputMonth) {
    ageYear--;
    ageMonth = 12 - (inputMonth - currentMonth);
  }

  //if the current month is equal to the input month
  //condition to check

  if (currentMonth == inputMonth) {
    //then check if the currentdays is less than input days
    if (currentDay < inputDay) {
      ageYear--;
      ageMonth = 12;
      ageDay = 30 - (inputDay - currentDay);
    }
  }
  //if the current day is less than the inputday
  if (currentDay < inputDay) {
    ageMonth--;
    //then get last day of the current month 
    const lastDayOfTheMonth = new Date(currentYear, currentMonth, 0).getDate()
    ageDay = lastDayOfTheMonth - (inputDay - currentDay);
  }
  //display the age result in the output space

  yearOutput.textContent = ageYear;
  monthOutput.textContent = ageMonth;
  dayOutput.textContent = ageDay;
}
