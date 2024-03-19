let gameseq=[];
let uesrseq=[];
let btns = ["yellow","red","green","purple"];

let started=false;
let level = 0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game is stared");
        started= true;

        levelup();
    }
});

function btnFlash(btn){ 
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelup(){
  uesrseq =[];
    level++;
    h2.innerText= `level ${level}`;

  //random btn choose
  let randIdx= Math.floor(Math.random()*3);
  let randcolor =btns[randIdx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
    btnFlash(randbtn);

} 

function checkAns(idx) {
    if(uesrseq[idx] === gameseq[idx]){
       if(uesrseq.length  == gameseq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerHTML= `Game over! your Score was  <b>${level}</b>  press any key to Start`;
        reset();
    }
}


function btnPress (){
   let btn = this;
   btnFlash(btn);

   usercolor = btn.getAttribute("id");
   uesrseq.push(usercolor);

   checkAns(uesrseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq= [];
    uesrseq =[];
    level =0 ;
}
