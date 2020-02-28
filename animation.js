
(function startgame(){
// variables
var card = document.getElementsByClassName("card");
var cards = Array.from(card);
var hasflipedcard=false;
var firstcard , secondcard;
var lock = false;

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

})();



