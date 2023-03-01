
printPyramid(5);

function printPyramid(height, currentStep = 2) {
  if (height === 0) {
    return;
  }
  const spaces = ".".repeat(height - 1);
  let rowStr = spaces + "#".repeat(currentStep);
  console.log(rowStr);
  
  
  const pyramidDiv = document.getElementById("pyramid");
  // const rowStr = printPyramid(5);
  let para = document.createElement("p");
  para.innerHTML = rowStr;
  // para.appendChild(rowStr);

  //last step
  pyramidDiv.appendChild(para);
  printPyramid(height - 1, currentStep + 1);
}


