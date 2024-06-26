let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
//random choice generated by computer
const computerChoice=() =>{
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame=() => {
    console.log("game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
}

//winner of the game
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="rgb(19, 57, 19)";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="rgb(133, 33, 33)";
    }
}
//game played between user and computer
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate computer's choice
    const compChoice=computerChoice();
    console.log("comp choice=",compChoice);

    if(userChoice==compChoice)
    {
        //game draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice == "rock"){
            //can't be rock as it get draw, it must be either paper or scissors
           userWin= compChoice=="paper" ? false : true;
        }
        else if(userChoice=="paper"){
            //rock or scissors
            userWin=compChoice=="scissors" ? false:true;
        }
        else{
            //paper or rock
            userWin==compChoice=="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})