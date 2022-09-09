let Container = document.getElementById("container");
let Win = document.getElementById("Winner");
let Tie = document.getElementById("Tie");
var container2 = document.getElementById("container2");
var count = 0;
let count3 = 0;
let Movement = 0;
let Movement1 = 0;
let player1 = "X";
let player2 = "O";
var arr = [];
var val = 0;
let bool = true;
let mat_arr = [];
let a = 0;
let b = 0;

let obj = {
  mat_arr : arr
};

let num = 0;


function Matrix() {

  if (bool) {
    // bool = false;
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
      parent.classList.add("prnt");
      // container3.appendChild(parent);
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
              Inspect(arr);
            } else {
              let b = (z.innerText = player2);
              count++;
              div.addEventListener("click", Store(b, j, i));
              Inspect(arr);
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

function Inspect(obj) {
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
        // Win.classList.add("Winner");
        Win.innerText = `Player ${player1} Winner`;
      }
      if (rowLen == val) {
        // Win.classList.add("Winner");
        Win.innerText = `Player ${player2} Winner`;
      }
      //ColumnsWise
      if (arr[j][i] == player1) {
        col1++;
        if (col1 == val) {
          // Win.classList.add("Winner");
          Win.innerText = `Player ${player1} Winner`;
        }
      } else if (arr[j][i] == player2) {
        col2++;
        if (col2 == val) {
          // Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }
      }
      // Diagonal Wise
      if (i == j && arr[i][j] == player2) {
        ODiag[k] = player2;
        k++;
        if (ODiag.length == val) {
          // Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }
      } else if (arr[i][j] == player1 && i == j) {
        XDiag[k1++] = player1;
        if (XDiag.length == val) {
          Win.innerText = `Player ${player1} Winner`;
        }
      }
      //2nd Diagonal
      if (arr[i][j] == player2 && i + j == val - 1) {
        z++;
        if (z == val) {
          // Win.classList.add("Winner");
          Win.innerText = `Player ${player2} Winner`;
        }
      }
      if (arr[i][j] == player1 && i + j == val - 1) {
        x++;
        if (x == val) {
          // Win.classList.add("Winner");
          Win.innerText = `Player ${player1} Winner`;
        }
      }
      // if (
      //   rowLen == val ||
      //   rowLen2 == val ||
      //   col1 == val ||
      //   col2 == val ||
      //   ODiag.length == val ||
      //   XDiag.length == val ||
      //   z == val ||
      //   x == val
      // ) {
      //   Win.classList.add("Winner");
      // } 
      else if (
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
            // Tie.classList.add("Looser");
            Tie.innerText = "It's a Tie";
          }
        }
      }
    }
  }
}

















//Copy of Previous Matrix
var div2;
let increment = 1;
let result = document.getElementById("result");
let Tie2 = document.getElementById("Tie2");
function CopyBtn() {
  let boolean = true;
  for (var i = 0; i < val; i++) {
    mat_arr[i];
    for (var j = 0; j < val; j++) {
      mat_arr[j] = [];
    }
  }
  console.log(arr);
  console.log("***************")
  console.log(obj);
  if (!bool) {
    for (let i = 0; i < val; i++) {
      // if(i == val - 1) {
        var container3 = document.createElement("div");
        container3.classList.add("Cont3");
      // }
      var parent = document.createElement("div");
      parent.classList.add("prnt");
      container3.appendChild(parent);
      container2.appendChild(container3);
      //Row Creation loop
      for (let j = 0; j < val; j++) {
        div2 = document.createElement("div");
        div2.classList.add("box");
        div2.setAttribute("id", `${increment}_${j}${i}`);
        // console.log(increment);
        
        increment++;
        let z = parent.appendChild(div2);
              if (obj.mat_arr[j][i] != undefined) {
                div2.innerText = obj.mat_arr[j][i];
          if (obj.mat_arr[j][i] == undefined) {
            div2.innerText = "";
          }
        }
        div2.addEventListener("click", () => {
          let div2id = document.getElementById(`${increment}_${j}${i}`);
          if (z.innerText == "" && result.innerText == "") {
            //odd and even logic, if even player X will move else player O
            if (count3 % 2 == 0) {
              let a = (z.innerText = player1);
              count3++;
              div2.addEventListener("click", Store2(obj,a, j, i));
              Inspect2(obj);
            } else {
              let b = (z.innerText = player2);
              count3++;
              div2.addEventListener("click", Store2(obj,b, j, i));
              Inspect2(obj);
            }
          }
        });
      }
    }
  }
  // console.log(replicate);
}
function Store2(obj,variable, j, i) {
  obj.mat_arr[j][i] = variable;
}



function Inspect2(obj) {
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
      if (obj.mat_arr[i][j] == player2) {
        rowLen++;
      } else if (obj.mat_arr[i][j] == player1) {
        rowLen2++;
      }
      if (rowLen2 == val) {
        // result.classList.add("Winner");
        result.innerText = `Player ${player1} Winner`;
      }
      if (rowLen == val) {
        // result.classList.add("Winner");
        result.innerText = `Player ${player2} Winner`;
      }
      //ColumnsWise
      if (obj.mat_arr[j][i] == player1) {
        col1++;
        if (col1 == val) {
          // result.classList.add("Winner");
          result.innerText = `Player ${player1} Winner`;
        }
      } else if (obj.mat_arr[j][i] == player2) {
        col2++;
        if (col2 == val) {
          // result.classList.add("Winner");
          result.innerText = `Player ${player2} Winner`;
        }
      }
      // Diagonal Wise
      if (i == j && obj.mat_arr[i][j] == player2) {
        ODiag[k] = player2;
        k++;
        if (ODiag.length == val) {
          // result.classList.add("Winner");
          result.innerText = `Player ${player2} Winner`;
        }
      } else if (obj.mat_arr[i][j] == player1 && i == j) {
        XDiag[k1++] = player1;
        if (XDiag.length == val) {
          result.innerText = `Player ${player1} Winner`;
        }
      }
      //2nd Diagonal
      if (obj.mat_arr[i][j] == player2 && i + j == val - 1) {
        z++;
        if (z == val) {
          // result.classList.add("Winner");
          result.innerText = `Player ${player2} Winner`;
        }
      }
      if (obj.mat_arr[i][j] == player1 && i + j == val - 1) {
        x++;
        if (x == val) {
          // result.classList.add("Winner");
          result.innerText = `Player ${player1} Winner`;
        }
      }
      else if (
        rowLen != val ||
        rowLen2 != val ||
        col1 != val ||
        col2 != val ||
        ODiag.length != val ||
        (XDiag.length != val) | (z != val) ||
        x != val
      ) {
        if (i == val - 1 && j == val - 1 && result.innerText !== "Winner") {
          Movement1++;
          if (Movement1 == val * val) {
            Tie.classList.add("Looser");
            Tie2.innerText = "It's a Tie";
          }
        }
      }
    }
  }
}
