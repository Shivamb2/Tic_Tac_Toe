console.log("Shivam");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let msg2 = document.querySelector("#msg2");
let turn0 = true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText="x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

    });
    
});
const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    };
};
const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
const showwinner =(Winner) =>{
msg.innerText = `Congratulation, Winner is ${Winner}`;
msgContainer.classList.remove("hide");
disableBox();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showwinner (pos1Val);
            }
        }
    }
}

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)