
printPyramid(5);

function printPyramid(height, currentStep = 2) {
  if (height === 0) {
    return;
  }
  const spaces = " ".repeat(height - 1);
  console.log(spaces + "#".repeat(currentStep));
  printPyramid(height - 1, currentStep + 1);
}

