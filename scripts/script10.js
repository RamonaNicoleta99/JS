let numbers = [15, 32, 67, 3, 19];
let max = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("The largest number is: " + max);
