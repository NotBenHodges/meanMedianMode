var numbers = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 20, 43, 2, 23, 12, 24, 31, 29];

function getSum(total, num) {
  return total + num;
}
function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}
