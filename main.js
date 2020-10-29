console.log("Greg");
let currentPlayer = "X";
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function checkForWin(winningCombination, playerSelections) {
  for (let i = 0; i < winningCombination.length; i = i + 1) {
    let currentCombination = winningCombination[i];
    console.log(currentCombination);

    for (j = 0; j < currentCombination.length; j = j + 1) {
      let currentSelection = currentCombination[j];
      console.log(currentSelection);
    }
  }
}
let cellElementArray = document.querySelectorAll(".grid-cell");

for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex += 1
) {
  let currentCellElement = cellElementArray[elementIndex];
  currentCellElement.addEventListener("click", function (event) {
    let clickedCellElement = event.target;
    console.log("You clicked on cell number: " + clickedCellElement.id);
    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      playerXSelections.push(clickedCellElement.id);
      let result = checkForWin(winningCombinations, playerXSelections);

      currentPlayer = "O";
    } else {
      clickedCellElement.innerHTML = "O";
      playerOSelections.push(clickedCellElement.id);
      let result = checkForWin(winningCombinations, playerOSelections);
      currentPlayer = "X";
    }
    console.log("xSelections " + playerXSelections);
    console.log("OSelections " + playerOSelections);
  });
}
