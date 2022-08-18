let n1 = "";
let n2 = "";
let operator = "";

//Function to avoid the reload of the page after submit
var form = document.getElementById("calcForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function resetForm() {
  document.getElementById("calcForm").reset();
  document.getElementById("calcDisplay").innerHTML = "";
  document.getElementById("calcDisplaySup").innerHTML = "";
  n1 = "";
  n2 = "";
}

function number1(numbers) {
  switch (numbers) {
    case "0":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "0";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "0";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "1":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "1";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "1";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "2":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "2";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "2";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "3":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "3";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "3";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "4":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "4";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "4";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "5":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "5";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "5";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "6":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "6";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "6";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "7":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "7";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "7";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "8":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "8";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "8";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "9":
      if (n1 === "") {
        document.getElementById("calcDisplay").innerHTML = "9";
        n1 = document.getElementById("calcDisplay").value;
      } else {
        document.getElementById("calcDisplay").innerHTML = n1 + "9";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case ".":
      if (n1 !== "" && n1.indexOf(".") == -1) {
        document.getElementById("calcDisplay").innerHTML = n1 + ".";
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "del":
      if (n1 !== "") {
        n1 = n1.substring(0, n1.length - 1);
        document.getElementById("calcDisplay").innerHTML = n1;
        n1 = document.getElementById("calcDisplay").value;
      }
      break;
    case "+":
      if (n1 !== "") {
        n2 = n1;
        document.getElementById("calcDisplaySup").innerHTML = n2;
        n1 = "";
        operator = "+";
        document.getElementById("calcDisplay").innerHTML = "";
      } else {
        alert("Por favor digite um número");
      }
      break;
    case "-":
      if (n1 !== "") {
        n2 = n1;
        document.getElementById("calcDisplaySup").innerHTML = n2;
        n1 = "";
        operator = "-";
        document.getElementById("calcDisplay").innerHTML = "";
      } else {
        alert("Por favor digite um número");
      }
      break;
    case "*":
      if (n1 !== "") {
        n2 = n1;
        document.getElementById("calcDisplaySup").innerHTML = n2;
        n1 = "";
        operator = "*";
        document.getElementById("calcDisplay").innerHTML = "";
      } else {
        alert("Por favor digite um número");
      }
      break;
    case "/":
      if (n1 !== "") {
        n2 = n1;
        document.getElementById("calcDisplaySup").innerHTML = n2;
        n1 = "";
        operator = "/";
        document.getElementById("calcDisplay").innerHTML = "";
      } else {
        alert("Por favor digite um número");
      }
      break;
    case "pct":
      if (n1 !== "" && n2 == "") {
        n2 = n1;
        document.getElementById("calcDisplay").innerHTML = parseFloat(n2) / 100;
        n1 = parseFloat(n2) / 100;
      } else if (n1 !== "" && n2 !== "") {
        document.getElementById("calcDisplay").innerHTML =
          (parseFloat(n2) * parseFloat(n1)) / 100;
        n1 = (parseFloat(n2) * parseFloat(n1)) / 100;
        document.getElementById("calcDisplaySup").innerHTML = "";
      } else {
        alert("Por favor digite um número");
      }
      break;
    case "sqrt":
      if (n1 !== "") {
        n2 = n1;
        document.getElementById("calcDisplaySup").innerHTML = n2;
        n1 = "";
        operator = "sqrt";
        document.getElementById("calcDisplay").innerHTML = Math.sqrt(
          parseFloat(n2)
        );
        n1 = Math.sqrt(parseFloat(n2));
      } else {
        alert("Por favor digite um número");
      }
      break;
    case "=":
      switch (operator) {
        case "+":
          if (n1 !== "" && n2 !== "") {
            document.getElementById("calcDisplay").innerHTML =
              parseFloat(n2) + parseFloat(n1);
            n1 = parseFloat(n2) + parseFloat(n1);
            document.getElementById("calcDisplaySup").innerHTML = "";
            n2 = "";
          }
          break;
        case "-":
          if (n1 !== "" && n2 !== "") {
            document.getElementById("calcDisplay").innerHTML =
              parseFloat(n2) - parseFloat(n1);
            n1 = parseFloat(n2) - parseFloat(n1);
            document.getElementById("calcDisplaySup").innerHTML = "";
            n2 = "";
          }
          break;
        case "*":
          if (n1 !== "" && n2 !== "") {
            document.getElementById("calcDisplay").innerHTML =
              parseFloat(n2) * parseFloat(n1);
            n1 = parseFloat(n2) * parseFloat(n1);
            document.getElementById("calcDisplaySup").innerHTML = "";
            n2 = "";
          }
          break;
        case "/":
          if (n1 !== "" && n2 !== "") {
            document.getElementById("calcDisplay").innerHTML =
              parseFloat(n2) / parseFloat(n1);
            n1 = parseFloat(n2) / parseFloat(n1);
            document.getElementById("calcDisplaySup").innerHTML = "";
            n2 = "";
          }
          break;
        case "pct":
          if (n1 !== "") {
          }
          break;
      }
      break;
    default:
      alert("Por favor, insira um número");
  }
}
