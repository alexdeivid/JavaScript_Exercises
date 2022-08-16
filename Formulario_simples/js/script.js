let firstName;
let surName;
let studyField;
let birthYear;

//Function to avoid the reload of the page after submit
var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

//Function to get the value inputed and show the result in the end
function fullName() {
  firstName = document.getElementById("firstName").value;
  surName = document.getElementById("surName").value;
  studyField = document.getElementById("studyField").value;
  birthYear = document.getElementById("birthYear").value;
  document.getElementById("result").innerHTML =
    "O nome do recruta é : " +
    firstName +
    " " +
    surName +
    "<br /> O campo de estudo do recruta é : " +
    studyField +
    "<br /> A idade do recruta é : " +
    (2022 - birthYear);
}

//Function to hide or show a DIV
function showMe() {
  var showDiv = document.getElementById("result");
  if (showDiv.style.display === "") {
    showDiv.style.display = "flex";
  } else if (showDiv.style.display === "none") {
    showDiv.style.display = "flex";
  } else {
    showDiv.style.display = "none";
  }
}
