// What do we need to include?
// - placeMark
// - Check for win
// - Check for draw
// - Switch turns
// LAST TASK: MAKE THIS FUN!!! =))


const input = document.querySelectorAll("div");
const oh = document.querySelectorAll(".oh");
const ex = document.querySelectorAll(".ex");
const win_label = document.querySelector(".win-label");
let type_count = 0;

const win_horizontal = document.querySelectorAll(".horizontal")
const win_vertical = document.querySelectorAll(".vertical")
const win_left_diagonal = document.querySelectorAll(".left-diagonal")
const win_right_diagonal = document.querySelectorAll(".right-diagonal")
const winning_chance = [[0,1,2],[3,4,5],[6,7,8], [0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let circleTurn = "ex";

function switchTurns(){
    if (circleTurn === "ex"){
        circleTurn = "oh";
    }else if (circleTurn === "oh"){
        circleTurn = "ex"
    }
}

function checkForWin(){
    
    for (let i = 0; i < winning_chance.length; i++){
        
        if (oh[winning_chance[i][0]].style.display === "block" && oh[winning_chance[i][1]].style.display === "block" && oh[winning_chance[i][2]].style.display === "block"){
            console.log("you win");

            addWinningLine(i)
            
            win_label.innerText = "O win!!!";
            
            win_label.style.translate = "0px";
            
            
            
        }
        else if (ex[winning_chance[i][0]].style.display === "block" && ex[winning_chance[i][1]].style.display === "block" && ex[winning_chance[i][2]].style.display === "block"){
            console.log("you win");
            
            addWinningLine(i)
            win_label.innerText = "X win!!!";
            
            win_label.style.translate = "0px";
            
            
        }
    }
    
}


function compareArrays(a, b) {
    return a.every((num, index) => num === b[index]);
}
function addWinningLine(place){
    if (compareArrays(winning_chance[place], [0,1,2]) === true){
        win_horizontal[0].style.display = "block";
        win_horizontal[1].style.display = "block";
        win_horizontal[2].style.display = "block";
    } else if(compareArrays(winning_chance[place], [3,4,5]) === true){
        win_horizontal[3].style.display = "block";
        win_horizontal[4].style.display = "block";
        win_horizontal[5].style.display = "block";
    } else if(compareArrays(winning_chance[place], [6,7,8]) === true){
        win_horizontal[6].style.display = "block";
        win_horizontal[7].style.display = "block";
        win_horizontal[8].style.display = "block";
    } else if(compareArrays(winning_chance[place], [0,3,6]) === true){
        win_vertical[0].style.display = "block";
        win_vertical[3].style.display = "block";
        win_vertical[6].style.display = "block";
    } else if(compareArrays(winning_chance[place], [1,4,7]) === true){
        win_vertical[1].style.display = "block";
        win_vertical[4].style.display = "block";
        win_vertical[7].style.display = "block";
    } else if(compareArrays(winning_chance[place], [2,5,8]) === true){
        win_vertical[2].style.display = "block";
        win_vertical[5].style.display = "block";
        win_vertical[8].style.display = "block";
    } else if(compareArrays(winning_chance[place], [0,4,8]) === true){
        win_left_diagonal[0].style.display = "block";
        win_left_diagonal[1].style.display = "block";
        win_left_diagonal[2].style.display = "block";
    } else if(compareArrays(winning_chance[place], [2,4,6]) === true){
        win_right_diagonal[0].style.display = "block";
        win_right_diagonal[1].style.display = "block";
        win_right_diagonal[2].style.display = "block";
    } 
}

function checkForDraw(){
    type_count += 1;
    if (type_count ===  9){
        console.log("You guys draw");
        win_label.innerText = "You guys have drawn!";
        win_label.style.translate = "0px";
    }
}


for (let i = 0; i < input.length; i++){
    
    
    input[i].addEventListener("click", function(){
        if (circleTurn === "ex"){
            ex[i].style.display = "block";
        }else if (circleTurn === "oh"){
            oh[i].style.display = "block";
        }
        checkForDraw()
        switchTurns()
        checkForWin()

    }, {once: true})
}








