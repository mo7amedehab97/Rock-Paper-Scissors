let textInp = document.getElementById("text-inp");
let btnInp = document.getElementById("btn-inp");
let loginElement = document.querySelector(".user-name")
let userNameElement = document.querySelector("header h3 span");
let playerChoice =document.querySelector(".player-choice");
let userTextSpan = document.querySelector(".user-choose span");
let computerTextSpan = document.querySelector(".computer-choose span");
let userScore =document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let countR =document.querySelector(".counter-rounds")





// set the options
let theChoices =["rock","paper","scissor"]
let imgSrc =["./assets/rock.png","./assets/paper.png","./assets/scissors.png"]

let pScore =0;
let cScore =0;
let countRounds =0;
countR.textContent = countRounds


// the login 
btnInp.addEventListener("click",()=>{
    if (textInp.value === "" || textInp.value === null)alert("please enter your name")
    else {
        localStorage.setItem("userName",JSON.stringify(textInp.value));
        loginElement.classList.add("dis")
    }
})

function showUserName(){
    let getUsername = localStorage.getItem("userName")
    userNameElement.textContent = JSON.parse(getUsername);
    
}
showUserName()

// this function si returning a single random every time and this is the computer choice
function computerChoice(){

   return theChoices[Math.floor(Math.random() * 3)]
}

function createImg(){
    for(let i=0; i<imgSrc.length;i++){
    let newImg = document.createElement("img");
    newImg.id= theChoices[i]
    newImg.src=imgSrc[i]
    playerChoice.appendChild(newImg)
    newImg.addEventListener("click",(i,b)=>{
        console.log(i.target)
        b =computerChoice()
        decideWinner(newImg.id,b)
        game(pScore,cScore)
    })
    }
}
createImg()
function decideWinner(player,compuetr){
    let result = player+compuetr
   switch(result){
       case "rockrock":
       case "paperpaper":
       case "scissorscissor":
        tie(player,compuetr) 
        break;  
       case 'rockscissor':
       case 'paperrock':
       case 'scissorpaper':
         win(player,compuetr);
         break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
         lose(player,compuetr);
         break;
   }
}

function win(player,computer){
 userTextSpan.textContent = player;
 computerTextSpan.textContent=computer;
countR.textContent= ++countRounds
 userScore.textContent= ++pScore;

}

function lose(player,computer){
    userTextSpan.textContent = player;
    computerTextSpan.textContent=computer;
    computerScore.textContent = ++cScore;
countR.textContent=++countRounds

   

}

function tie(player,computer){
    userTextSpan.textContent = player;
    computerTextSpan.textContent=computer;
countR.textContent=++countRounds

}
function game(playerScore,computerScore){
if(countRounds === 5){
    if(playerScore > computerScore){
        console.log("you win ")
    }
    else if(computerScore> playerScore){
        console.log("you looose ")

    }
    else{
                console.log("it's tie")

    }
}    
}