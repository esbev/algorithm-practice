// Write code to return the the number of vowels in `str`

// var vowelCount = function(str) {
//   str = str.toLowerCase();
//   const vowels = ["a", "e", "i", "o", "u"];
//   var count = 0;
//   for (i in str) {
//     for (i2 in vowels) {
//       if (str.charAt(i) == vowels[i2]) {
//           count++;
//       }
//     }
//   }
//   return count;
// };

var vowelCount = function(str) {
  str = str.toLowerCase();
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {

    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }

  return count;
};
