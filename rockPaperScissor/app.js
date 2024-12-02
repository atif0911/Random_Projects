const contents=document.querySelectorAll(".contents");
let user=document.querySelector("#us");
let comp=document.querySelector("#cs");
let coo=document.querySelector("#coo");
const msg=document.querySelector("#msg");
let userScore=0;
let compScore=0;

genCompCh=()=>{
    const choice=["rocks","paper","scissor"];
    const id=Math.floor(3*Math.random());
    return choice[id];
}

drawGame=()=>{
    console.log("Game Draw");
    msg.innerText="Game Draw";
}

showWinner=(userWin,userCh,compCh)=>{
    if(userWin){
        console.log("YOU WIN");
        userScore++;
        msg.innerText=`You Win! Your ${userCh} beats ${compCh}`;
        user.innerText=userScore;
        console.log(userScore);
    }
    else{
        console.log("YOU LOSE");
        compScore++;
        msg.innerText=`You Lose! ${userCh} beats your ${compCh}`;
        comp.innerText=compScore;
        console.log(compScore);
    }
}

playGame=(userCh)=>{
    console.log(userCh);
    const compCh=genCompCh();
    console.log(compCh);
    if(userCh==compCh){
        drawGame();
    }
    else {
        let userWin=true;
        if(userCh==="rocks"){
            userWin=compCh==="paper"?false:true;
        }
        else if(userCh==="paper"){
            userWin=compCh==="scissor"?false:true;
        }
        else{
            userWin=compCh==="rock"?false:true;
        }
        showWinner(userWin,userCh,compCh);
    }

}

contents.forEach((content)=>{
    content.addEventListener("click",()=>{
        const userCh=content.getAttribute("id");
        playGame(userCh);
    });
});