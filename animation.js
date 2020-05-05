var started = false;
var start=document.getElementsByClassName("start")[0];

start.addEventListener("click",startFun)
// start and reset buttons
function startFun(){
    if(started == false){
        started = true;
        start.innerHTML="game started"
        start.style.color="#6eff6e"
        console.log(started)
        startgame();
    }
}

function startgame(){
// variables
var card = document.getElementsByClassName("card");
var cards = Array.from(card);
var hasflipedcard=false;
var firstcard , secondcard;
var lock = false;
var cardsRemoved=0;
var msg=document.getElementsByClassName("congrats")[0];
var seconds=document.getElementsByClassName("seconds")[0];
var counter = 0;

// start timer
var interval=setInterval(() => {
    counter++;
    seconds.innerHTML=counter;
}, 1000);

// shuffle cards
cards.forEach(function(item){
    var rand = Math.floor(Math.random() * 12);
    item.style.order = rand;
});

//add eventlistener to all cards
for(i=0 ; i<cards.length ; i++){
    cards[i].addEventListener('click',flip);
}

// on click flip card
function flip(){
    if(!lock){
    this.classList.add('flip');
    if(!hasflipedcard){
        hasflipedcard=true;
        firstcard=this;
        
    }else{
    secondcard=this;
    hasflipedcard=false;
    checkifmatched(firstcard,secondcard);
    }
}
}

// check if the 2 cards are matched
function checkifmatched(firstCard,secondCard){
    if (firstcard.getAttribute("title")==secondcard.getAttribute("title") && firstcard!=secondCard){
        removecard(firstCard,secondcard);
    }else{
        unflipcard();
    }
}

// remove matched cards
function removecard(firstCard,secondCard){
    setTimeout(function(){
        firstCard.style.visibility="hidden";
        secondCard.style.visibility="hidden"
    },400)
    console.log("card removed")
    cardsRemoved++;
    if(cardsRemoved==6){
        started = false;
        clearInterval(interval);
        msg.classList.add("appear")
    }
}

// unflip unmatched cards
function unflipcard(){
    lock = true;
    setTimeout(function(){
        firstcard.classList.remove("flip");
        secondcard.classList.remove("flip");
        lock = false;
    },1000)
    console.log("unflip card")
}
}