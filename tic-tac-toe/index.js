var val = 3;
var count = 1;
let player1 = "X";
let player2 = "O";
const arr = [null];

function Matrix() {

    console.log(val);
    let key = 1;
    for(let i = 1; i <= val; i++) {
        var parent = document.createElement("div");
        var container2 = document.getElementById("container2");
        parent.classList.add("prnt");
        container2.appendChild(parent)
        for(let j = 1; j <= val; j++) {
            var div = document.createElement("div");
            div.classList.add("box");
            div.setAttribute('id',`${j}${i}`);
            let z = parent.appendChild(div);
            // function hi() {
                //     for(let f = 0; f < val*val; f++) {
                    //         if(k.id == "X")
                    //     }
                    // }
                    console.log(`${j}${i}`)
                    
                div.addEventListener('click', () => {
                let k = document.getElementById(`${j}${i}`);
                console.log(k.id);
                const arr = [];
                if(z.innerText == '') {
                    if(count % 2 == 0) {
                        let a = z.innerText = player1;
                        // z.innerText = player1;
                        console.log(a);
                        count++;
                        Store(arr, a);

                        // if(k.id == `${j}${i}` && k.id == `${j}${i+1}` && k.id == `${j}${i+2}` ) {
                        //     console.log("player1 is winner")
                        // }
                }
                else {
                    let b = z.innerText = player2;
                    console.log(b)
                    count++;
                }
                }        
            })
        }
        
    }
}

function Store(arr, variable) {
    for(let i = 0; i < val; i++) {
        for(let j = 0; j < val; j++) {
            arr[j] = [variable];
        }
    }
    console.log(arr)
}

