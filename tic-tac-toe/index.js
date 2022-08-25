var val = 3;
var count = 1;
var count2 = 0;
let player1 = "X";
let player2 = "O";
var arr = [];
var div;
let a;
  for (var i=0;i<val;i++) {
    arr[i]
     for(var j = 0; j < val; j++) {
        arr[j] = []
     }
  }


function Matrix() {

    console.log(val);
    let key = 1;
    for(let i = 0; i < val; i++) {
        var parent = document.createElement("div");
        var container2 = document.getElementById("container2");
        parent.classList.add("prnt");
        container2.appendChild(parent)
        for(let j = 0; j < val; j++) {
            div = document.createElement("div");
            div.classList.add("box");
            div.setAttribute('id',`${j}${i}`);
           
            let z = parent.appendChild(div);
            // function hi() {
                //     for(let f = 0; f < val*val; f++) {
                    //         if(k.id == "X")
                    //     }
                    // }
                    // console.log(`${j}${i}`)
                    
                div.addEventListener('click', () => {
                let k = document.getElementById(`${j}${i}`);
                console.log("id : "+k.id);
              
                if(z.innerText == '') {
                    if(count % 2 == 0) {
                         a = z.innerText = player1;
                        // z.innerText = player1;
                        // console.log(a);
                        count++;
                        count2++;
                        div.addEventListener('click',Store(a, j, i));
                        if(a !== "") {
                            Inspect(arr, j, i);
                        }


                        // for(let i = 0; i < arr.length; i++) {
                        //     for(let j = 0; j < arr.length; j++) {
                        //         console.log(arr[i][j]);
                        //     }
                        // }
                }
                else {
                    let b = z.innerText = player2;
                    // console.log(b)
                    count++;
                    count2++;
                    div.addEventListener('click',Store(b, j, i));
                    if(b !== "") {
                        Inspect(arr, j, i)
                    }
                }
                }        
            })
        }
    }
}

//Check
function Inspect(arr, j , i) {
   for(let a = 0; a < arr.length; a++) {
    let arr1 = [];
    let arr2 = [];
    for(let b = 0; b < arr.length; b++) {
            // if(arr[b][a] == "O") {
            //     arr1.push(player2)
            // }
            // else if(arr[b][a] == "X") {
            //     arr2.push(player1);
            // }
            console.log(a,b)
        }
        // if(arr1.length >= 3) {
        //     console.log("OK");
        // }
        // if(arr2.length >= 3) {
        //     console.log("OK2")
        // }
        }
   }

function system() {

}


// var Square = new Array();
function Store(variable,j,i) {
    arr[j][i] = variable;
    // console.log(arr);
    // if(a == 'O') {
    //     if(a == "O") {
    //         console.log("OK")
    //     }
    //     else {
            // console.log("no")
    //     }
    // } 

    // console.log(arr)
    // if(i == j && i+1 == j+1 && i+2 == j + 2) {
    //     if(arr[i][j] == "X") {
    //         console.log("Player X is Winner");
    //     }
    //     else {
    //         console.log("Player O is Winner");
    //     }
    // } 
}
// setTimeout(()=> {

//     bool(arr)
// }

// ,10000)
// function bool(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//         }
//     }
//     console.log(arr)
// }
