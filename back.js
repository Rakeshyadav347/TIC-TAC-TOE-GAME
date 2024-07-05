let boxes = document.querySelectorAll(".box");
let btn=document.querySelector("#r1");

const Winpatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

let turnO=true;

boxes.forEach((box) => {
    
    box.addEventListener("click",()=>{
        
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        
    });
    
}
);