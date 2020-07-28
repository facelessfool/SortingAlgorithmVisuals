var numElement = document.getElementById("numbers");
var numBoxElement = document.querySelector("#num-box");
var enteredNumbers = document.querySelector(".numbersEntered");
var sortButton = document.querySelector("#sortButton");
var afterSort = document.querySelector(".afterSort");
let numList = [];

numBoxElement.addEventListener("keypress", check);

function check(event) {
  if (event.keyCode == 13) {
    var num = numBoxElement.value;

    if (isNaN(num)) {
      alert("not a number!");
      numBoxElement.value = "";
    } else {
      numList.push(num);
      console.log(numList);
      numBoxElement.value = "";

      enteredNumbers.innerHTML = numList;
    }
  }
}

sortButton.addEventListener("click", function () {
  numList.sort(function (a, b) {
    return a - b;
  });

  afterSort.innerHTML = numList;
});
