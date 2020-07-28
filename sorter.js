var numElement = document.getElementById("numbers");
var numBoxElement = document.querySelector("#num-box");
var enteredNumbers = document.querySelector(".numbersEntered");
var sortButton = document.querySelector("#sortButton");
var afterSort = document.querySelector(".afterSort");
var BubbleBtn = document.querySelector("#Bubble");
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

BubbleBtn.addEventListener("click", function () {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < numList.length - 1; i++) {
      if (numList[i] > numList[i + 1]) {
        var temp = numList[i];
        numList[i] = numList[i + 1];
        numList[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  afterSort.innerHTML = numList;
});
