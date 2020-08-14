var NumList = document.querySelector(".numbers");
var BubbleElement = document.querySelector(".bubbleSort");
var InsertElement = document.querySelector(".insertionSort");
var myChart = document.querySelector(".myChart").getContext("2d");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");

//generate random numbers

function RandomNumberGen(n) {
  var nums = [];
  while (nums.length < n) {
    var r = Math.floor(Math.random() * 1000) + 1;
    if (nums.indexOf(r) === -1) nums.push(r);
  }
  console.log("random num: ", nums);
  return nums;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var list1 = RandomNumberGen(100);

// NumList.innerHTML = list1;

//chart

var chart = new Chart(myChart, {
  //type of the chart	});
  type: "bar",
  data: {
    labels: list1,
    datasets: [
      {
        label: "numbers",

        backgroundColor: "rgb(255, 99, 132)",
        data: list1,
      },
    ],
  },

  options: {
    animation: {
      duration: 0,
    },
    responsive: true,
  },
});

//Add data
// function addData(chart, label, data1) {
//   var n = data1.length;
//   // chart.data.labels = label;
//   // for (let i = 0; i < n; i++) {
//   //   chart.data.datasets[0].data[i] = data1[i];

//   //   chart.options.animation.duration = 0;
//   // }
//   chart.update();
//   return;
//   // chart.data.datasets.data = data;
// }

//swap function

function swap2(listS, index) {
  var temp = listS[index];
  listS[index] = listS[index + 1];
  listS[index + 1] = temp;
}
//Bubble Sort

async function BubbleSort(list2) {
  var len = list1.length;
  var lastSorted = len - 1;

  var isSorted = false;

  var j = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastSorted; i++) {
      //display the simulation taking place

      // alert(list2);

      // console.log("list3: ", list3);

      // count += 1;
      // console.log("count: ", count);
      // console.log("list of list is:", listofLists);
      // InsertElement.innerHTML = list2;

      if (list2[i] > list2[i + 1]) {
        swap2(list2, i);
        chart.data.datasets[0].data[i] = list2[i];
        chart.data.datasets[0].data[i + 1] = list2[i + 1];
        await sleep(5);
        chart.update();
        // addData(chart, list2, list2);
        // setInterval(drawChart(list2), 1000);

        isSorted = false;
      }
    }

    lastSorted -= 1;
  }

  return list2;
}

//Insertion Sort

async function insertionSort(list1) {
  var inserLen = list1.length;

  var lastSorted_ins = inserLen - 1;

  for (let i = 1; i < inserLen; i++) {
    var key = list1[i];
    for (let j = i - 1; j >= 0; j--) {
      if (list1[j] > key) {
        list1[j + 1] = list1[j];
        list1[j] = key;
        //displaying the simulation going on
        // console.log(list1);
        chart.data.datasets[0].data[j] = list1[j];
        chart.data.datasets[0].data[j + 1] = list1[j + 1];
        await sleep(5);
        chart.update();
      }
    }
  }
  // console.log(list1);
  return list1;
}

//Merge sort

async function mergeSort(list1) {
  var sorted = list1.slice(),
    n = sorted.length,
    buffer = new Array(n);

  for (var size = 1; size < n; size *= 2) {
    for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
      var left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n),
        i = left;
      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
        // console.log("buffer in first while=> ", buffer);
      }
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }

      // console.log(" chart data : ", chart.data.datasets[0].data);
      list1 = sorted;
      chart.data.datasets[0].data = list1;
      // console.log("list before: ", list1);

      console.log("list after : ", list1);
      await sleep(30);
      chart.update();
      // await sleep(20);

      console.log("buffer outside while: ", buffer);
    }

    var temp = sorted,
      sorted = buffer,
      buffer = temp;
    list1 = sorted;
    chart.data.datasets[0].data = list1;
    await sleep(250);
    chart.update();
  }

  return sorted;
}

function print(s) {
  document.write(s + "<br />");
}

// connecting functions to the button

//btn1 =Bubble Sort

btn1.addEventListener("click", function () {
  var BubbleSortedList = BubbleSort(list1);
  console.log(BubbleSortedList);
  // BubbleElement.innerHTML = BubbleSortedList;
});

//btn2 = Insertion Sort
btn2.addEventListener("click", function () {
  var insertSortedList = insertionSort(list1);
  // InsertElement.innerHTML = insertSortedList;
});

btn3.addEventListener("click", function () {
  var mergeSortedList = mergeSort(list1);
  console.log("merge sorted: ", list1);
  // InsertElement.innerHTML = insertSortedList;
});
