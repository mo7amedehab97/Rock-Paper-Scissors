let textInp = document.getElementById("text-inp");
let btnInp = document.getElementById("btn-inp");
let loginElement = document.querySelector(".user-name")
let userNameElement = document.querySelector("header h3 span");
let playerChoice =document.querySelector(".player-choice")

// set the options
let theChoices =["rock","paper","scissor"]
let imgSrc =["../assets/rock.png","../assets/paper.png","../assets/scissors.png"]

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
        b =computerChoice()
        console.log(newImg.id,b)
    })
    }
}
createImg()