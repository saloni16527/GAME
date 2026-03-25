let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");


const gencompchoice = () => {
  const options =[ "rock","paper","scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};

const drawgame = () => {
   console.log("game was draw");
   msg.innerText="ITS A DRAW";
};

const showWinner = (userwin,userchoice,compchoice) => {
  if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log("you win");
     msg.innerText= `you win! your ${userchoice} beats ${compchoice}`;
     //msg.style.backgroundColor = "pink";
  }else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("you lose");
    msg.innerText  = `you lose. ${compchoice} beats your ${userchoice}`;
  }
};

const playgame = (userchoice) => {
  console.log("user choice =", userchoice);
  const compchoice = gencompchoice();
  console.log("comp choice =", compchoice);

 if(userchoice === compchoice){
  drawgame();
 } else {
   let userwin = true;
   if(userchoice === "rock"){
     userwin = compchoice === "paper" ? false:true;
   }else if(userchoice === "paper"){
     userwin = compchoice === "scissor" ? false:true;
   }else {
    userwin = compchoice === "rock" ? false:true;
   }
   showWinner(userwin,userchoice,compchoice);
  }
};


choices.forEach((choice) =>{
  choice.addEventListener("click",() => {
    const userchoice = choice.getAttribute("id");
   console.log("choice was clicked", userchoice);
   playgame(userchoice);
  });  
});
