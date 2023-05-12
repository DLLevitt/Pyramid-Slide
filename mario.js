function determineHeightAndThenDrawPyramid() {
  const slider = document.getElementById("height-slider");
  const sliderValue = document.getElementById("slider-value");
  const charSelect = document.getElementById("characters");

  // Set up slider event listener
  slider.addEventListener("input", () => {
    const height = parseInt(slider.value);
    sliderValue.textContent = height;
    printPyramid(height, charSelect.value);
  });

  // Set up character select event listener
  charSelect.addEventListener("change", () => {
    const height = parseInt(slider.value);
    printPyramid(height, charSelect.value);
  });

  // Draw initial pyramid
  const height = parseInt(slider.value);
  sliderValue.textContent = height;
  printPyramid(height, charSelect.value);
}

function printPyramid(height, char) {
  const heightNum = Number(height);
  const pyramidDiv = document.getElementById("pyramid");
  pyramidDiv.innerHTML = "";

  for (let i = 1; i <= heightNum; i++) {
    const para = document.createElement("p");
    const spaces = ".".repeat(heightNum - i);
    const blocks = char.repeat(i + 1);
    const rowStr = spaces + blocks;
    para.textContent = rowStr;
    pyramidDiv.appendChild(para);
  }
}

determineHeightAndThenDrawPyramid();
