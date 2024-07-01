let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#rst");
let nGamebtn=document.querySelector("#newbtn");
let msgcon=document.querySelector(".msgcon");
let msg = document.querySelector("#msg");
let turnO = true;

const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO=true;
    enableboxes();
    msgcon.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO)
            {
                box.innerText="O";
                box.style.color="green";
                turnO=false;
            }
        else{
             box.innerText="X";
             box.style.color="red";
             turnO=true;
        } 
        box.disabled=true;
        checkWin();   
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  
const showWin = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
  };
const checkWin = () => {
    for (let pattern of winPat) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWin(pos1Val);
          return true;
        }
      }
    }
  };
  

nGamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);