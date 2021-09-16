let textInp = document.getElementById("text-inp");
let btnInp = document.getElementById("btn-inp");
let loginElement = document.querySelector(".user-name")
let userNameElement = document.querySelector("header h3 span");

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