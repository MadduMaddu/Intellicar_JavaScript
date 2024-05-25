var greet = "hello Madhavi Maddu";
var ar = greet.split(" ");
let res = " ";
for (var i = 0; i < ar.length; i++) {
  var word = ar[i];
  var r = "";
  for (var k = word.length - 1; k >= 0; k--) {
    r += word.charAt(k);
  }
  res = res + " " + r;
}
console.log(res);