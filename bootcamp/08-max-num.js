// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var currentNumber;
    var Largest=0;
    for (i in arr) {
      currentNumber = arr[i];
        if (Largest < currentNumber) {
          Largest = currentNumber;
        }
    }
    return Largest;
};
