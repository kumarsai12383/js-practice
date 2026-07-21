let array = [7,7,7,10];
let largest = array[0];
let secondLargest = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
        secondLargest = array[i];
    }
}

if (secondLargest === largest) {
  console.log("There is no second largest number in the array.");
} else {
  console.log(largest);
  console.log(secondLargest);
}
