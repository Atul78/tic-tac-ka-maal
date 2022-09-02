let Timer = document.getElementById("Timer");
let Container = document.getElementById("container");
let Win = document.getElementById("Winner");
let Tie = document.getElementById("Tie");
var count = 1;
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
              let a = z.innerText = player1;
              count++;
              div.addEventListener("click", Store(a, j, i));
              if (a !== "") {
                Inspect(arr, j, i);
              }
            } else {
              let b = (z.innerText = player2);
              count++;
              div.addEventListener("click", Store(b, j, i));
              if (b !== "") {
                Inspect(arr, j, i);
              }
            }
          }
        });
      }
    }
  }
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
        WINNER1 = "Winner";
        Win.classList.add("Winner");
        Win.innerText = `Player ${player1} Winner`;
      }
      if (rowLen == val) {
        WINNER1 = "Winner";
        Win.classList.add("Winner");
        Win.innerText = `Player ${player2} Winner`;
      }
      //ColumnsWise
      if (arr[j][i] == player1) {
        col1++;
        if (col1 == val) {
          WINNER1 = "Winner";
          Win.classList.add("Winner");
          Win.innerText = `Player ${player1} Winner`;
        }
  
      }
      else if (arr[j][i] == player2) {
        col2++;
        console.log(col2);
        if (col2 == val) {
          WINNER1 = "Winner";
          Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }

      // Diagonal Wise
      if (i == j && arr[i][j] == player2) {
        ODiag[k] = player2;
        k++;
        if (ODiag.length == val) {
          WINNER1 = "Winner";
          Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }
      } else if (i == j && arr[i][j] == player1) {
        XDiag[k1] = player1;
        k1++;

        if (XDiag.length == val) {
          WINNER1 = "Winner";
          Win.classList.add("Winner");
          Win.innerText = `Player ${player1} Winner`;
        }
      }
      //2nd Diagonal
      if (arr[i][j] == player2 && i + j == val - 1) {
        z++;
        if (z == val) {
          WINNER1 = "Winner";
          Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }
      }
      if (arr[i][j] == player1 && i + j == val - 1) {
        x++;
        if (x == val) {
          WINNER1 = "Winner";
          Win.classList.add("Winner");
          Win.innerText = `Player ${player1} Winner`;
        }
      }
      if (rowLen == val || rowLen2 == val || col1 == val || col2 == val || ODiag.length == val || XDiag == val || z == val || x == val) {
          Win.classList.add("Winner");
      } else if (rowLen != val || rowLen2 != val || col1 != val || col2 != val || ODiag.length != val || XDiag != val | z != val || x != val) {
        if (i == val - 1 && j == val - 1 && Win.innerText !== 'Winner') {
          Movement++;
          if (X_move == val * val ) {
            Tie.classList.add("Looser");
            Tie.innerText = "It's a Tie";
          }
        }
      }
    }
  }
  }
}
function Store(variable, j, i) {
  arr[j][i] = variable;
}


//Lets' copy the button using other function
let Timer2 = document.getElementById("Timer");
let result = document.getElementById("result");
let Tie2 = document.getElementById("Tie2");
let div2 = document.getElementById("ok");
let bool1 = true;
let arr1 = [];
let count1 = 0;
let Movement1 = 0;
function CopyBtn() {
  if (bool1) {
    bool1 = false;
    //This loop is because we can check condition in 2d array
    for (var i = 0; i < val; i++) {
      arr1[i];
      for (var j = 0; j < val; j++) {
        arr1[j] = [];
      }
    }

    //This loop is creating matrix
    //column Creation loop
    for (let i = 0; i < val; i++) {
      var parent1 = document.createElement("div");
      var container3 = document.getElementById("container3");
      parent1.classList.add("print");
      container3.appendChild(parent1);
      //Row Creation loop
      for (let j = 0; j < val; j++) {
        var div3 = document.createElement("div");
        div3.classList.add("box");
        div3.setAttribute("id", `${j}${i}`);
        let z = parent1.appendChild(div3);
        //onClick event on each box
        div3.addEventListener("click", () => {
          let k = document.getElementById(`${j}${i}`);

          if (z.innerText == "" && Win.innerText == "") {
            //odd and even logic, if even player X will move else player O
            if (count1 % 2 == 0) {
              let a = z.innerText = player1;
              count1++;
              div3.addEventListener("click", Store2(a, j, i));
              if (a !== "") {
                Inspect2(arr1, j, i);
              }
            } else {
              let b = (z.innerText = player2);
              count1++;
              div3.addEventListener("click", Store2(b, j, i));
              if (b !== "") {
                Inspect2(arr1, j, i);
              }
            }
          }
        });
      }
    }
  }
}


function Inspect2(arr1) {
  
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
        if (arr1[i][j] == player2) {
        rowLen++;
      } else if (arr1[i][j] == player1) {
        rowLen2++;
      }
      if (rowLen2 == val) {
        result.classList.add("Winner");
        result.innerText = `Player ${player1} Winner`;
      }
      if (rowLen == val) {
        result.classList.add("Winner");
        result.innerText = `Player ${player2} Winner`;
      }
      //ColumnsWise
      if (arr1[j][i] == player1) {
        col1++;
        if (col1 == val) {
          WINNER1 = "Winner";
          result.classList.add("Winner");
          result.innerText = `Player ${player1} Winner`;
        }
      }
      else if (arr1[j][i] == player2) {
        col2++;
        console.log(col2);
        if (col2 == val) {
          result.classList.add("Winner");
          result.innerText = `Player ${player2} Winner`;
        }

      // Diagonal Wise
      if (i == j && arr1[i][j] == player2) {
        ODiag[k] = player2;
        k++;
        if (ODiag.length == val) {
          result.classList.add("Winner");
          result.innerText = `Player ${player2} Winner`;
        }
      } else if (i == j && arr1[i][j] == player1) {
        XDiag[k1] = player1;
        k1++;

        if (XDiag.length == val) {
          result.classList.add("Winner");
          result.innerText = `Player ${player1} Winner`;
        }
      }
      //2nd Diagonal
      if (arr1[i][j] == player2 && i + j == val - 1) {
        z++;
        if (z == val) {
          result.classList.add("Winner");
          result.innerText = `Player ${player2} Winner`;
        }
      }
      if (arr1[i][j] == player1 && i + j == val - 1) {
        x++;
        if (x == val) {
          result.classList.add("Winner");
          result.innerText = `Player ${player1} Winner`;
        }
      }
      if (rowLen == val || rowLen2 == val || col1 == val || col2 == val || ODiag.length == val || XDiag == val || z == val || x == val) {
          result.classList.add("Winner");
      } else if (rowLen != val || rowLen2 != val || col1 != val || col2 != val || ODiag.length != val || XDiag != val | z != val || x != val) {
        if (i == val - 1 && j == val - 1 && Win.innerText !== 'Winner') {
          Movement1++;
          if (X_move == val * val ) {
            Tie2.classList.add("Looser");
            Tie2.innerText = "It's a Tie";
          }
        }
      }
    }
  }
  }
}

function Store2(variable, j, i) {
  arr[j][i] = variable;
}

