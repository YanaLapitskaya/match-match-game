const gameBtn=document.getElementById('gameButton');
const desk=document.getElementById('desk');
const skirtBtn=document.getElementById('skirtButton');
const skirtRad=document.getElementById('skirtRadios');
const levelBtn=document.getElementById('levelButton');
const levelRad=document.getElementById('levelRadios');
const timer=document.getElementById('timer');

document.body.addEventListener("click", function(e) {
	Game.hideOnClickOutside(skirtRad,e.target);
	Game.hideOnClickOutside(levelRad,e.target);
});

skirtBtn.addEventListener('click', ()=>Game.toggleVisibility(skirtRad));

levelBtn.addEventListener('click', ()=>Game.toggleVisibility(levelRad));

gameBtn.addEventListener('click', ()=>Game.startGame());

desk.addEventListener('click', (e)=>Card.onClick(e.target.parentNode));
