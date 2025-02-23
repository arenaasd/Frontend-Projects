
const audio = document.getElementById('background-music');

function toggleMusic() {
  if (audio.paused) {
    audio.play();
  }
}

let setMinesButton = document.getElementsByClassName("button-78")[0]

setMinesButton.addEventListener("click", function reset(){
  window.location.reload()
})




let board = [];
let rows = 8;
let columns = 8;

let minesCount = 5;
let minesLocation = [];
let tilesClicked = 0;
let flagenabled = false;
let gameover = false;

startGame();

function setMines() {
    let minesleft = minesCount;
    while(minesleft > 0){
        let r = Math.floor(Math.random() * rows)
        let c = Math.floor(Math.random() * columns)
        let id = r.toString() + "-" + c.toString();

        if(!minesLocation.includes(id)){
            minesLocation.push(id)
            minesleft -= 1;
        }
    }
}

function startGame() {
  document.getElementById("mines-count").innerHTML = minesCount;
  document.getElementById("flag-button").addEventListener("click", setFlag);
  setMines();

  // board
  for (r = 0; r < rows; r++) {
    let row = [];
    for (c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.addEventListener("click", clickTile);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
}

function setFlag() {
  if (flagenabled) {
    flagenabled = false;
    document.getElementById("flag-button").style.backgroundColor = "brown";
  } else {
    flagenabled = true;
    document.getElementById("flag-button").style.backgroundColor = "red";
  }
}

function clickTile() {
    if(gameover || this.classList.contains("tile-clicked")){
        return;
    }
  let tile = this;

  if (flagenabled) {
    if (tile.innerText == "") {
      tile.innerText = "🚩";
    } else if (tile.innerText == "🚩") {
      tile.innerText = "";
    }
    return;
  }
  if (minesLocation.includes(tile.id)) {
    gameover = true;
    revealMines();
    return;
  }

  let cords = tile.id.split("-");
  let r = parseInt(cords[0]);
  let c = parseInt(cords[1]);
  checkMine(r, c);
}

function revealMines() {
  for (r = 0; r < rows; r++) {
    for (c = 0; c < columns; c++) {
      let tile = board[r][c];

      if (minesLocation.includes(tile.id)) {
        tile.innerText = "☢";
        tile.style.backgroundColor = "red";
      }
    }
}
}

function checkMine(r,c) {
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return;
  }
  if(board[r][c].classList.contains("tile-clicked")){
    return
  }
  board[r][c].classList.add("tile-clicked")
  tilesClicked += 1;

  let minesFound = 0;

  minesFound += checkTile(r-1, c-1);
  minesFound += checkTile(r-1, c);
  minesFound += checkTile(r-1, c+1);

  minesFound += checkTile(r, c-1);
  minesFound += checkTile(r, c+1);

  minesFound += checkTile(r+1, c-1);
  minesFound += checkTile(r+1, c)
  minesFound += checkTile(r+1, c+1);

  if (minesFound > 0) {
    board[r][c].innerText = minesFound;
    board[r][c].classList.add("x" + minesFound.toString());
  } else {
    checkMine(r-1, c-1);
    checkMine(r-1, c);
    checkMine(r-1, c+1);

    checkMine(r, c-1);
    checkMine(r, c+1);

    checkMine(r+1, c-1);
    checkMine(r+1, c);
    checkMine(r+1, c+1);
  }
  if(tilesClicked == rows * columns - minesCount){
    document.getElementById("mines-count").innerText = "Cleared"
    gameover = true;
  }
}

function checkTile(r, c) {
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return 0;
  }
  if (minesLocation.includes(r.toString() + "-" + c.toString())) {
    return 1;
  }
  return 0;
}
