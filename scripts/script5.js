let sentence = prompt("Enter a sentence:");
let spaceCount = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " ") {
    spaceCount++;
  }
}

console.log("Number of spaces:", spaceCount);
