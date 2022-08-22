var val = 3;
var count = 1;
var m = document.getElementById("container2");
let player1 = "X";
let player2 = "O";
function myFunction() {

    console.log(val);
    let key = 1;
    for(let i = 1; i <= val; i++) {
        var parent = document.createElement("div");
        var b = document.getElementById("container2");
        parent.classList.add("prnt");
        b.appendChild(parent)
        for(let j = 1; j <= val; j++) {
            var a = document.createElement("div");
            a.classList.add("box");
            a.setAttribute('id',`${j}${i}`);
            

            let z = parent.appendChild(a);
            // function hi() {
                //     for(let f = 0; f < val*val; f++) {
                    //         if(k.id == "X")
                    //     }
                    // }
                    
                a.addEventListener('click', () => {
                let k = document.getElementById(`${j}${i}`);
                console.log(k)
                if(z.innerText == '') {
                    if(count % 2 == 0) {
                        z.innerText = player1;  
                        count++;
                }
                else {
                    z.innerText = player2;
                    count++;
                }
                }
            
                    
           
            })
        }
        
    }
}

