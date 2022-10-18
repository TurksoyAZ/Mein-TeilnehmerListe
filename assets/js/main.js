
// Lösung 1

let output = document.getElementById("ulOutput");
let inputFeld = document.getElementById("inputText");

let array = [];

function fügen() {
  if (inputFeld.value) {
    array.push(inputFeld.value);
    output.innerHTML = `<li>${array.join("</li><li>")} </li>`;
    inputFeld.value = "";
  } else {
    inputFeld.value = "";
  }
}

function rueck() {
  array.pop();

  if (array.length != 0) {
    output.innerHTML = `<li> ${array.join("</li><li>")} </li>`;
    console.log(array);
  } else {
    output.innerHTML = "";
  }
}

// Lösung 2

// let ulOutput = document.querySelector("#ulOutput");
// let inputText = document.getElementById("inputText");

// const listArr = [];

// let list;

// function fügen() {

//   if (!inputText.value) {
//     alert("Please add a value");
//   } else {

//     list = document.createElement("li");
//     ulOutput.appendChild(list);
//     listArr.push(inputText.value);
//     console.log(listArr);

//     listArr.forEach((el, i) => {
//       list.innerHTML = el;

//     });
//   }
//   inputText.value = "";
// }

// function ruck() {
//   listArr.pop();
//   console.log(listArr);
//   let items = document.querySelectorAll("#ulOutput li");
//   ulOutput.removeChild(items[items.length - 1]); /* last list delet */
// }

// inputText.setAttribute('class//id//href//type','list-el//list-el//link//number')
