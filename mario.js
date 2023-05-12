
// printPyramid(5);


function determineHeightAndThenDrawPyramid() {
   // Retrieve the height value from the text box
  const heightInput = document.getElementById("height");
  const height = parseInt(heightInput.value);

  // Call the printPyramid function with the retrieved height value and a current step of 1
  printPyramid(height, 1);
}

function printPyramid(height, currentStep) {
  height = document.getElementById("height").value;
    // Convert the height string to a number
  const heightNum = Number(height);
  // Retrieve the pyramid container element
  const pyramidDiv = document.getElementById("pyramid");
  pyramidDiv.innerHTML = "";

  
  // Create a new row element for each step of the pyramid
  for (let i = 2; i <= height; i++) {
    // Create a new paragraph element to hold the row
    const para = document.createElement("p");

    // Add spaces and hashes to the row string based on the current step
    const spaces = ".".repeat(height - i);
    const hashes = "#".repeat(i);
    const rowStr = spaces + hashes;

    // Set the text content of the paragraph element to the row string
    para.textContent = rowStr;

    // Add the paragraph element to the pyramid container
    pyramidDiv.appendChild(para);
  }
}



// function printPyramid(height, currentStep  = 2) {
// function printPyramid(height, currentStep) {
//   const pyramidDiv = document.getElementById("pyramid");
  // height = determineHeightAndThenDrawPyramid();
  // if (height === 0) {
  //   return;
  // }
    
  // if (currentStep > height) {
  //   return;
  // }
    
  
  // const spaces = ".".repeat(height - 1);
  // let rowStr = spaces + "#".repeat(currentStep);
  // console.log(rowStr);
  
  
  // const pyramidDiv = document.getElementById("pyramid");
  // pyramidDiv.innerHTML = document.getElementById("pyramid");

  // const rowStr = printPyramid(5);
  // let para = document.createElement("p");
  // para.innerHTML = rowStr;
  // para.appendChild(rowStr);

  //last step
  // pyramidDiv.appendChild(para);
  // printPyramid(height - 1, currentStep + 1);
  
  
// }



