let usrScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const mssg=document.querySelector("#mssg"); 

const uscorepara=document.querySelector("#uscore");
const cscorepara=document.querySelector("#cscore");


const showWin= (userWin,userChoice,compCh) =>{
    if(userWin)
        {
            usrScore++;
            uscorepara.innerText=usrScore;
            mssg.innerText=`You Win!! ${userChoice} beats ${compCh}`;
            mssg.style.backgroundColor="green";
        }
        else{
            comScore++;
            cscorepara.innerText=comScore;
            mssg.innerText=`You loose!! ${compCh} beats ${userChoice}`;
            mssg.style.backgroundColor="red";

        }
};

const drawGame = () => {
    mssg.innerText="Game is Draw! Play Again!!!";
    mssg.style.backgroundColor="#7a072f";
};

const genComChoice = () => {
    const options = ["rock", "paper", "sci"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compCh = genComChoice();
    console.log("Computer choice =", compCh);

    if (userChoice === compCh) {
        drawGame();
      }
        else{  
         let userWin=true;
         if(userChoice==="rock")
                 {
                     userWin=compCh==="paper"?false:true;
                 }
             else if(userChoice==="paper")
                 {
                     userWin=compCh==="sci"? false : true;
               }
             else 
               {
                   userWin=compCh==="rock"?false:true;
                 }
               showWin(userWin,userChoice,compCh);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
