let container2 = document.getElementById("container2");
let hide = document.getElementById("hide");
hide.style.display = "none";

let copy = 0;


let newObj = {
  object_: {
    player1: "X",
    player2: "O",
    arr: [],
    result: "",
    Tiee: "",
    Movement: 0,
    count: 0,
  },
  Matrix: function () {
    hide.style.display = "block";
    val = document.getElementById("inp").value;
    let Tie = document.createElement("p");
    Tie.setAttribute("id", `_in${copy}_win`);
    let container1 = document.createElement("div");
    container1.setAttribute("class", "d-flex");
    container2.appendChild(container1);
    //This loop is because we can check condition in 2d array

    for (var j = 0; j < val; j++) {
      this.object_.arr[j] = [];
    }
    for (let i = 0; i < val; i++) {
      var parent = document.createElement("div");
      parent.classList.add("prnt");
      container1.appendChild(parent);
      //Row Creation loop
      for (let j = 0; j < val; j++) {
        var div = document.createElement("div");
        div.classList.add("box");
        div.setAttribute("id", `${copy}_${j}${i}`);
        let z = parent.appendChild(div);
        //onClick event on each box
        div.addEventListener("click", () => {
          this.Store(
            this.object_.count % 2 == 0
              ? this.object_.player1
              : this.object_.player2,
            j,
            i,
            z,
            parent
          );
          this.object_.count++;
        });
      }
    }
  },
  Store: function (variable, j, i, z, target) {
    if (this.object_.result === "" && z.innerText === "") {
      z.innerText = variable;
      this.object_.arr[j][i] = variable;
      this.Inspect(target);
    }
  },
  Inspect: function (target) {
    const resultWinner = document.createElement("p");
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
        if (this.object_.arr[i][j] == this.object_.player2) {
          rowLen++;
          if (rowLen == val) {
            this.object_.result = `Player ${this.object_.player2} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        } else if (this.object_.arr[i][j] == this.object_.player1) {
          rowLen2++;
          if (rowLen2 == val) {
            this.object_.result = `Player ${this.object_.player1} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        }

        //ColumnsWise
        if (this.object_.arr[j][i] == this.object_.player1) {
          col1++;
          if (col1 == val) {
            this.object_.result = `Player ${this.object_.player1} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        } else if (this.object_.arr[j][i] == this.object_.player2) {
          col2++;
          if (col2 == val) {
            this.object_.result = `Player ${this.object_.player2} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        }
        // Diagonal Wise
        if (i == j && this.object_.arr[i][j] == this.object_.player2) {
          ODiag[k] = this.object_.player2;
          k++;
          if (ODiag.length == val) {
            this.object_.result = `Player ${this.object_.player2} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        } else if (this.object_.arr[i][j] == this.object_.player1 && i == j) {
          XDiag[k1++] = this.object_.player1;
          if (XDiag.length == val) {
            this.object_.result = `Player ${this.object_.player1} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        }
        //2nd Diagonal
        if (
          this.object_.arr[i][j] == this.object_.player2 &&
          i + j == val - 1
        ) {
          z++;
          if (z == val) {
            this.object_.result = `Player ${this.object_.player2} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        }
        if (
          this.object_.arr[i][j] == this.object_.player1 &&
          i + j == val - 1
        ) {
          x++;
          if (x == val) {
            this.object_.result = `Player ${this.object_.player1} Winner`;
            hide.style.display = "none";
            resultWinner.innerText = this.object_.result;
            target.appendChild(resultWinner);
          }
        } else if (
          rowLen != val ||
          rowLen2 != val ||
          col1 != val ||
          col2 != val ||
          ODiag.length != val ||
          (XDiag.length != val) | (z != val) ||
          x != val
        ) {
          if (i == val - 1 && j == val - 1) {
            this.object_.Movement++;
            if (this.object_.Movement == val * val) {
              if (this.object_.result == "") {
                this.object_.Tiee = `Tie`;
                hide.style.display = "none";
                resultWinner.innerText = this.object_.Tiee;
                target.appendChild(resultWinner);
              }
            }
          }
        }
      }
    }
  },
};

var matricies = newObj;
hide.addEventListener("click", function () {
  let copied_matrix = { ...matricies };
  matricies = copied_matrix;
  copied_matrix.Matrix();
});

document.getElementById("start").addEventListener("click", () => {
  matricies.Matrix();
});
