//DECLARE VARIABLES
var currentDayEl = document.querySelector("#currentDay");
var storageAlertEl = document.querySelector("#storageAlert");
// var El = document.querySelector("#");
// var El = document.querySelector("#");
// var El = document.querySelector("#");
// var El = document.querySelector("#");
// var El = document.querySelector("#");
// var El = document.querySelector("#");

//6 variables
var inputSix = document.querySelector("#taskInputSix");
var saveSixBtn = document.querySelector("#saveBtnSix");
//9 variables
var inputSeven = document.querySelector("#taskInputSeven");
var saveSevenBtn = document.querySelector("#saveBtnSeven");
//9 variables
var inputEight = document.querySelector("#taskInputEight");
var saveEightBtn = document.querySelector("#saveBtnEight");
//9 variables
var inputNine = document.querySelector("#taskInputNine");
var saveNineBtn = document.querySelector("#saveBtnNine");
//10 vars
var inputTen = document.querySelector("#taskInputTen");
var saveTenBtn = document.querySelector("#saveBtnTen");
//11 vars
var inputEleven = document.querySelector("#taskInputEleven");
var saveElevenBtn = document.querySelector("#saveBtnEleven");
//12 vars
var inputTwelve = document.querySelector("#taskInputTwelve");
var saveTwelveBtn = document.querySelector("#saveBtnTwelve");
//13 vars
var inputThirteen = document.querySelector("#taskInputThirteen");
var saveThirteenBtn = document.querySelector("#saveBtnThirteen");
//14 vars
var inputFourteen = document.querySelector("#taskInputFourteen");
var saveFourteenBtn = document.querySelector("#saveBtnFourteen");
//15 vars
var inputFifteen = document.querySelector("#taskInputFifteen");
var saveFifteenBtn = document.querySelector("#saveBtnFifteen");
//16 vars
var inputSixteen = document.querySelector("#taskInputSixteen");
var saveSixteenBtn = document.querySelector("#saveBtnSixteen");
//17 vars
var inputSeventeen = document.querySelector("#taskInputSeventeen");
var saveSeventeenBtn = document.querySelector("#saveBtnSeventeen");
//18 vars
var inputEighteen = document.querySelector("#taskInputEighteen");
var saveEighteenBtn = document.querySelector("#saveBtnEighteen");
//19 vars
var inputNineteen = document.querySelector("#taskInputNineteen");
var saveNineteenBtn = document.querySelector("#saveBtnNineteen");
//20 vars
var inputTwenty = document.querySelector("#taskInputTwenty");
var saveTwentyBtn = document.querySelector("#saveBtnTwenty");
//21 vars
var inputTwentyOne = document.querySelector("#taskInputTwentyOne");
var saveTwentyOneBtn = document.querySelector("#saveBtnTwentyOne");
//22 vars
var inputTwentyTwo = document.querySelector("#taskInputTwentyTwo");
var saveTwentyTwoBtn = document.querySelector("#saveBtnTwentyTwo");
// var savedTaskNine = JSON.parse(localStorage.getItem("taskNine")) || [];
// localStorage.setItem("taskNine", JSON.stringify(savedTasks));

var now = moment();
// var hour = moment().hour().format(HH);
// var hourRaw = moment().hour();
var hour = moment().format("HH");
// var hour = moment(k kk);
console.log(hour);

//Upon pageload, show current day
function showCurrentDay() {
  currentDayEl.textContent = moment().format("[Today is] dddd");
  console.log(currentDayEl);
}
showCurrentDay();

//show the past, present, future status of time blocks
//also, render the locally stored tasks onscreen
function timeStateDisplay() {
  // 6AM EVENT BLOCK
  if (6 == hour) {
    inputSix.classList.add("present");
  } else if (hour > 6) {
    inputSix.classList.add("past");
  } else {
    inputSix.classList.add("future");
  }
  // 7AM EVENT BLOCK
  if (7 == hour) {
    inputSeven.classList.add("present");
  } else if (hour > 7) {
    inputSeven.classList.add("past");
  } else {
    inputSeven.classList.add("future");
  }
  // 8AM EVENT BLOCK
  if (8 == hour) {
    inputEight.classList.add("present");
  } else if (hour > 8) {
    inputEight.classList.add("past");
  } else {
    inputEight.classList.add("future");
  }
  // 9AM EVENT BLOCK
  if (9 == hour) {
    inputNine.classList.add("present");
  } else if (hour > 9) {
    inputNine.classList.add("past");
  } else {
    inputNine.classList.add("future");
  }
  // 10AM EVENT BLOCK
  if (10 == hour) {
    inputTen.classList.add("present");
  } else if (hour > 10) {
    inputTen.classList.add("past");
  } else {
    inputTen.classList.add("future");
  }
  // 11AM EVENT BLOCK
  if (11 == hour) {
    inputEleven.classList.add("present");
  } else if (hour > 11) {
    inputEleven.classList.add("past");
  } else {
    inputEleven.classList.add("future");
  }
  // 12PM EVENT BLOCK
  if (12 == hour) {
    inputTwelve.classList.add("present");
  } else if (hour > 12) {
    inputTwelve.classList.add("past");
  } else {
    inputTwelve.classList.add("future");
  }
  // 1PM EVENT BLOCK
  if (13 == hour) {
    inputThirteen.classList.add("present");
  } else if (hour > 13) {
    inputThirteen.classList.add("past");
  } else {
    inputThirteen.classList.add("future");
  }
  // 2PM EVENT BLOCK
  if (14 == hour) {
    inputFourteen.classList.add("present");
  } else if (hour > 14) {
    inputFourteen.classList.add("past");
  } else {
    inputFourteen.classList.add("future");
  }
  // 3PM EVENT BLOCK
  if (15 == hour) {
    inputFifteen.classList.add("present");
  } else if (hour > 15) {
    inputFifteen.classList.add("past");
  } else {
    inputFifteen.classList.add("future");
  }
  // 4PM EVENT BLOCK
  if (16 == hour) {
    inputSixteen.classList.add("present");
  } else if (hour > 16) {
    inputSixteen.classList.add("past");
  } else {
    inputSixteen.classList.add("future");
  }
  // 5PM EVENT BLOCK
  if (17 == hour) {
    inputSeventeen.classList.add("present");
  } else if (hour > 17) {
    inputSeventeen.classList.add("past");
  } else {
    inputSeventeen.classList.add("future");
  }
  // 6PM EVENT BLOCK
  if (18 == hour) {
    inputEighteen.classList.add("present");
  } else if (hour > 18) {
    inputEighteen.classList.add("past");
  } else {
    inputEighteen.classList.add("future");
  }
  // 7PM EVENT BLOCK
  if (19 == hour) {
    inputNineteen.classList.add("present");
  } else if (hour > 19) {
    inputNineteen.classList.add("past");
  } else {
    inputNineteen.classList.add("future");
  }
  // 8PM EVENT BLOCK
  if (20 == hour) {
    inputTwenty.classList.add("present");
  } else if (hour > 20) {
    inputTwenty.classList.add("past");
  } else {
    inputTwenty.classList.add("future");
  }
  // 9PM EVENT BLOCK
  if (21 == hour) {
    inputTwentyOne.classList.add("present");
  } else if (hour > 21) {
    inputTwentyOne.classList.add("past");
  } else {
    inputTwentyOne.classList.add("future");
  }
  // 10PM EVENT BLOCK
  if (22 == hour) {
    inputTwentyTwo.classList.add("present");
  } else if (hour > 22) {
    inputTwentyTwo.classList.add("past");
  } else {
    inputTwentyTwo.classList.add("future");
  }
}
timeStateDisplay();
renderTask();

//storageConfirm() declaration
function storageConfirm() {
  //create new element
  var newConfirm = document.createElement("p");
  //add text content to element
  newConfirm.textContent = "Event stored in local storage!";
  newConfirm.classList.add("text-center");
  //append element to a parent element
  storageAlertEl.appendChild(newConfirm);
  //after 3 seconds, clear the message content
  setTimeout(function () {
    newConfirm.textContent = "";
  }, 2000);
}

//store user inputs from the respective text areas
function storeInput(event) {
  // prevent page reload
  event.preventDefault();
  // display confirmation of successful local storage
  storageConfirm();

  //---capturing input values---
  var taskSix = inputSix.value;
  var taskSeven = inputSeven.value;
  var taskEight = inputEight.value;
  var taskNine = inputNine.value;
  var taskTen = inputTen.value;
  var taskEleven = inputEleven.value;
  var taskTwelve = inputTwelve.value;
  var taskThirteen = inputThirteen.value;
  var taskFourteen = inputFourteen.value;
  var taskFifteen = inputFifteen.value;
  var taskSixteen = inputSixteen.value;
  var taskSeventeen = inputSeventeen.value;
  var taskEighteen = inputEighteen.value;
  var taskNineteen = inputNineteen.value;
  var taskTwenty = inputTwenty.value;
  var taskTwentyOne = inputTwentyOne.value;
  var taskTwentyTwo = inputTwentyTwo.value;
  //   ---setting captured values to local storage---
  localStorage.setItem("taskSix", taskSix);
  localStorage.setItem("taskSeven", taskSeven);
  localStorage.setItem("taskEight", taskEight);
  localStorage.setItem("taskNine", taskNine);
  localStorage.setItem("taskTen", taskTen);
  localStorage.setItem("taskEleven", taskEleven);
  localStorage.setItem("taskTwelve", taskTwelve);
  localStorage.setItem("taskThirteen", taskThirteen);
  localStorage.setItem("taskFourteen", taskFourteen);
  localStorage.setItem("taskFifteen", taskFifteen);
  localStorage.setItem("taskSixteen", taskSixteen);
  localStorage.setItem("taskSeventeen", taskSeventeen);
  localStorage.setItem("taskEighteen", taskEighteen);
  localStorage.setItem("taskNineteen", taskNineteen);
  localStorage.setItem("taskTwenty", taskTwenty);
  localStorage.setItem("taskTwentyOne", taskTwentyOne);
  localStorage.setItem("taskTwentyTwo", taskTwentyTwo);

  //   console.log(taskNine);

  renderTask();
}

//pull respective event values from local storage
function renderTask() {
  //retrieving values from local storage keys
  var taskSix = localStorage.getItem("taskSix");
  var taskSeven = localStorage.getItem("taskSeven");
  var taskEight = localStorage.getItem("taskEight");
  var taskNine = localStorage.getItem("taskNine");
  var taskTen = localStorage.getItem("taskTen");
  var taskEleven = localStorage.getItem("taskEleven");
  var taskTwelve = localStorage.getItem("taskTwelve");
  var taskThirteen = localStorage.getItem("taskThirteen");
  var taskFourteen = localStorage.getItem("taskFourteen");
  var taskFifteen = localStorage.getItem("taskFifteen");
  var taskSixteen = localStorage.getItem("taskSixteen");
  var taskSeventeen = localStorage.getItem("taskSeventeen");
  var taskEighteen = localStorage.getItem("taskEighteen");
  var taskNineteen = localStorage.getItem("taskNineteen");
  var taskTwenty = localStorage.getItem("taskTwenty");
  var taskTwentyOne = localStorage.getItem("taskTwentyOne");
  var taskTwentyTwo = localStorage.getItem("taskTwentyTwo");

  taskInputSix.textContent = taskSix;
  taskInputSeven.textContent = taskSeven;
  taskInputEight.textContent = taskEight;
  inputNine.textContent = taskNine;
  taskInputTen.textContent = taskTen;
  taskInputEleven.textContent = taskEleven;
  taskInputTwelve.textContent = taskTwelve;
  taskInputThirteen.textContent = taskThirteen;
  taskInputFourteen.textContent = taskFourteen;
  taskInputFifteen.textContent = taskFifteen;
  taskInputSixteen.textContent = taskSixteen;
  taskInputSeventeen.textContent = taskSeventeen;
  taskInputEighteen.textContent = taskEighteen;
  taskInputNineteen.textContent = taskNineteen;
  taskInputTwenty.textContent = taskTwenty;
  taskInputTwentyOne.textContent = taskTwentyOne;
  taskInputTwentyTwo.textContent = taskTwentyTwo;
}

//EVENT LISTENERS ON SAVE BUTTONS
saveSixBtn.addEventListener("click", storeInput);
saveSevenBtn.addEventListener("click", storeInput);
saveEightBtn.addEventListener("click", storeInput);
saveNineBtn.addEventListener("click", storeInput);
saveTenBtn.addEventListener("click", storeInput);
saveElevenBtn.addEventListener("click", storeInput);
saveTwelveBtn.addEventListener("click", storeInput);
saveThirteenBtn.addEventListener("click", storeInput);
saveFourteenBtn.addEventListener("click", storeInput);
saveFifteenBtn.addEventListener("click", storeInput);
saveSixteenBtn.addEventListener("click", storeInput);
saveSeventeenBtn.addEventListener("click", storeInput);
saveEighteenBtn.addEventListener("click", storeInput);
saveNineteenBtn.addEventListener("click", storeInput);
saveTwentyBtn.addEventListener("click", storeInput);
saveTwentyOneBtn.addEventListener("click", storeInput);
saveTwentyTwoBtn.addEventListener("click", storeInput);
