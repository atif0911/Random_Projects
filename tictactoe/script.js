let boxes=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg");
let msg=document.querySelector("#win");

let turnO=true;
const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            turnO=false;
            box.innerText="X";
        }
        else{
            turnO=true;
            box.innerText="O";
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes)
        box.disabled=true;
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
        
};

showWinner=(winner)=>{
    msg.innerText=`Congratulations The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};
const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                disableBoxes();
                showWinner(pos1val);
            }

        }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);