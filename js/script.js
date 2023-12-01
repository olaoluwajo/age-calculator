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

  // Calculate age
  let ageYear = currentYear - inputYear;
  let ageMonth = currentMonth - inputMonth;
  let ageDay = currentDay - inputDay;

  //  if the current month is less than the input month adjust age
  if (currentMonth < inputMonth) {
    ageYear--;
    ageMonth = 12 - (inputMonth - currentMonth);
  }

  //if the current month equals the input month

  if (currentMonth == inputMonth) {
    //if the current day is less than the input day adjust age
    if (currentDay < inputDay) {
      ageYear--; //decrease ageyear by 1
      ageMonth = 12; //let agemonth equals 12
      ageDay = 30 - (inputDay - currentDay); 
    }
  }

  // Adjust age if the current day is less than the input day
  if (currentDay < inputDay) {
    ageMonth--; //decrease agemonth by 1 
    

    // Get the last day of the current month
    const lastDayOfTheMonth = new Date(currentYear, currentMonth, 0).getDate();

    ageDay = lastDayOfTheMonth - (inputDay - currentDay);
  }

  //display age
  yearOutput.textContent = ageYear;
  monthOutput.textContent = ageMonth;
  dayOutput.textContent = ageDay;
}

//add event listener to submit button

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  //check if input is empty
  if (isEmpty()) {
    alert("Please enter a valid date");
  } else {
    calculateAge();
  }
});

//function to check if input is empty
function isEmpty() {
  if (dayInput.value === "" || monthInput.value === "" || yearInput.value === "") {
    return true;
  } else {
    return false;
  }
}
