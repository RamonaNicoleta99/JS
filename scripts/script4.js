let year = parseInt(prompt("Enter a year:"));
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
  console.log(`Leap year`);
else console.log(`Not Leap year`);
