var NumList = document.querySelector(".numbers");
var BubbleElement = document.querySelector(".bubbleSort");
var InsertElement = document.querySelector(".insertionSort");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");

//generate random numbers

function RandomNumberGen(n) {
  var nums = [];
  while (nums.length < n) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (nums.indexOf(r) === -1) nums.push(r);
  }
  console.log("random num: ", nums);
  return nums;
}

var list1 = RandomNumberGen(10);
NumList.innerHTML = list1;

//Bubble Sort
function BubbleSort(list1) {
  var len = list1.length;
  var lastSorted = len - 1;

  var isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastSorted; i++) {
      //display the simulation taking place
      console.log(list1);
      if (list1[i] > list1[i + 1]) {
        var temp = list1[i];
        list1[i] = list1[i + 1];
        list1[i + 1] = temp;
        isSorted = false;
      }
    }
    lastSorted -= 1;
  }

  return list1;
}

//Insertion Sort

function insertionSort(list1) {
  var inserLen = list1.length;

  var lastSorted_ins = inserLen - 1;

  for (let i = 1; i < inserLen; i++) {
    var key = list1[i];
    for (let j = i - 1; j >= 0; j--) {
      if (list1[j] > key) {
        list1[j + 1] = list1[j];
        list1[j] = key;
        //displaying the simulation going on
        console.log(list1);
      }
    }
  }
  // console.log(list1);
  return list1;
}

// connecting functions to the button

//btn1 =Bubble Sort

btn1.addEventListener("click", function () {
  var BubbleSortedList = BubbleSort(list1);

  BubbleElement.innerHTML = BubbleSortedList;
});

//btn2 = Insertion Sort
btn2.addEventListener("click", function () {
  var insertSortedList = insertionSort(list1);
  InsertElement.innerHTML = insertSortedList;
});
