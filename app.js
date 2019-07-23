let user_pannel = document.getElementById("user-score");
let comp_pannel = document.getElementById("comp-score");
let userscore = 0;
let compscore = 0;
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");
let message = document.querySelector(".message")
let compchoice ;
const user = "user".fontsize(5).fontcolor("#E04D4D").sub();
const comp = "comp".fontsize(5).fontcolor("#E04D4D").sub();
function random() {
    const choices = ["r","p","s"];
    compchoice = choices[Math.floor(Math.random()*3)];
    return compchoice ;
}
function translition(x) {
    if( x == "r") {
        return "Rock"
        }else if(x == "p") {
            return "Paper"
        }else{
            return "Scissors"
        }
}
function game(userchoice) {
random();
switch(userchoice + compchoice) {
case "rs" :
    case "pr":
        case "sp" :
            userscore++;
            user_pannel.innerHTML=userscore;
            message.innerHTML=`${translition(userchoice)} ${user} beat ${translition(compchoice)} ${comp} , You Win .`
            break;
case "sr" :
    case "rp":
        case "ps" :
            compscore++;
            comp_pannel.innerHTML=compscore;
            message.innerHTML=`${translition(userchoice)} ${user} lose against ${translition(compchoice)} ${comp} , You Lose .`
            break;
default : 
    message.innerHTML="It's A Draw !!";
    break ;
}
}
function main() {
rock.addEventListener('click',function () { game("r");})
paper.addEventListener('click',function() { game("p");})
scissors.addEventListener('click',function() { game("s");})
}
main();

