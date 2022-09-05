let Timer = document.getElementById("Timer");
let Container = document.getElementById("container");
let Win = document.getElementById("Winner");
let Atul = document.getElementById("atul");
let Tie = document.getElementById("Tie");
var count = 0;
let Movement = 0;
let player1 = "X";
let player2 = "O";
var arr = [];
var val = 0;
let bool = true;
let Warning_X = "Player X is about to win";
let Warning_O = "Player O is about to win";

function Matrix() {
  if (bool) {
    bool = false;
    val = document.getElementById("inp").value;
    //This loop is because we can check condition in 2d array
    for (var i = 0; i < val; i++) {
      arr[i];
      for (var j = 0; j < val; j++) {
        arr[j] = [];
      }
    }

    //This loop is creating matrix
    //column Creation loop
    for (let i = 0; i < val; i++) {
      var parent = document.createElement("div");
      var container2 = document.getElementById("container2");
      parent.classList.add("prnt");
      container2.appendChild(parent);
      //Row Creation loop
      for (let j = 0; j < val; j++) {
        var div = document.createElement("div");
        div.classList.add("box");
        div.setAttribute("id", `${j}${i}`);
        let z = parent.appendChild(div);
        //onClick event on each box
        div.addEventListener("click", () => {
          let k = document.getElementById(`${j}${i}`);

          if (z.innerText == "" && Win.innerText == "") {
            //odd and even logic, if even player X will move else player O
            if (count % 2 == 0) {
              let a = (z.innerText = player1);
              count++;
              div.addEventListener("click", Store(a, j, i));
              if (a !== "") {
                Inspect(arr);
              }
            } else {
              let b = (z.innerText = player2);
              count++;
              div.addEventListener("click", Store(b, j, i));
              if (b !== "") {
                Inspect(arr);
              }
            }
          }
        });
      }
    }
  }
}
function Store(variable, j, i) {
  arr[j][i] = variable;
}

function Inspect(arr) {
  let ODiag = [];
  let XDiag = [];
  let k = 0;
  let k1 = 0;
  //2nd Diagonal Variable
  let z = 0;
  let x = 0;
  for (let i = 0; i < val; i++) {
    let rowLen = 0;
    let rowLen2 = 0;
    let col1 = 0;
    let col2 = 0;
    for (let j = 0; j < val; j++) {
      if (arr[i][j] == player2) {
        rowLen++;
      } else if (arr[i][j] == player1) {
        rowLen2++;
      }
      if (rowLen2 == val) {
        Win.classList.add("Winner");
        Win.innerText = `Player ${player1} Winner`;
      }
      if (rowLen == val) {
        Win.classList.add("Winner");
        Win.innerText = `Player ${player2} Winner`;
      }
      //ColumnsWise
      if (arr[j][i] == player1) {
        col1++;
        if (col1 == val) {
          Win.classList.add("Winner");
          Win.innerText = `Player ${player1} Winner`;
        }
      } else if (arr[j][i] == player2) {
        col2++;
        if (col2 == val) {
          Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }
        
      }
        // Diagonal Wise
        if (i == j && arr[i][j] == player2) {
          ODiag[k] = player2;
          k++;
          if (ODiag.length == val) {
            Win.classList.add("Winner");
            Win.innerText = `Player ${player2} Winner`;
          }
        }
        else if (arr[i][j] == player1 && i == j) {
          XDiag[k1++] = player1;
          console.log(XDiag.length);
          if(XDiag.length == val) {
            Win.innerText = `Player ${player1} Winner`;
          }}
        //2nd Diagonal
        if (arr[i][j] == player2 && i + j == val - 1) {
          z++;
          if (z == val) {
            Win.classList.add("Winner");
            Win.innerText = `Player ${player2} Winner`;
          }
        }
        if (arr[i][j] == player1 && i + j == val - 1) {
          x++;
          console.log(x);
          if (x == val) {
            Win.classList.add("Winner");
            Win.innerText = `Player ${player1} Winner`;
          }
        }
        if (
          rowLen == val ||
          rowLen2 == val ||
          col1 == val ||
          col2 == val ||
          ODiag.length == val ||
          XDiag.length == val ||
          z == val ||
          x == val
        ) {
          Win.classList.add("Winner");
        } else if (
          rowLen != val ||
          rowLen2 != val ||
          col1 != val ||
          col2 != val ||
          ODiag.length != val ||
          (XDiag.length != val) | (z != val) ||
          x != val
        ) {
          if (i == val - 1 && j == val - 1 && Win.innerText !== "Winner") {
            Movement++;
            if (Movement == val * val) {
              Tie.classList.add("Looser");
              Tie.innerText = "It's a Tie";
            }
          }
      }
    }
  }
}

