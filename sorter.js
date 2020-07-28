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
  draw_chart(numList);
});

BubbleBtn.addEventListener("click", function () {
  let len = numList.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (numList[i] > numList[i + 1]) {
        let tmp = numList[i];
        numList[i] = numList[i + 1];
        numList[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  afterSort.innerHTML = numList;
  draw_chart(numList);
});

// buidling chart chart

function draw_chart(a) {
  var chart = new Chart(myChart, {
    //type of the chart
    type: "bar",
    data: {
      labels: a,
      datasets: [
        {
          label: "My first chart drawing",
          background: "rgb(255, 99, 132)",
          data: a,
        },
      ],
    },

    options: { responsive: false },
  });
}
