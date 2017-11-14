class Game{
	static putCards(){
		let skirt=document.querySelector('input[name = "skirt"]:checked').value;
		let level=Number(document.querySelector('input[name = "level"]:checked').value);
		let randArr=generateRandArr(level).concat(generateRandArr(level));
		desk.classList=level===24?'grid-8-col':'grid-6-col';

		desk.innerHTML='';
		for(let i=level;i>0;i--){
			new Card(skirt,randArr[i-1]);
		}
	}

	static startTimer(){
		var killId = setTimeout(function() {
		  for (var i = killId; i > 0; i--) clearInterval(i)
		}, 1000);

		let date=new Date();
		date.setMinutes(2);
		date.setSeconds(0);
		
		let x=setInterval(()=>{
			date.setSeconds(date.getSeconds()-1);
			timer.innerHTML = date.getMinutes()+':'+date.getSeconds();
			if (date.getSeconds()===0&&date.getMinutes()===0) {
			   	clearInterval(x);
			    this.showGameOver();
			}
		}, 1000);
	}

	static startGame(){
		this.putCards();
		this.startTimer();
	}

	static showGameOver(){
		desk.innerHTML="GAMEOVER";
	}

	static showWin(){
		desk.innerHTML="CONGRATULATIONS! YOU ARE THE WINNER";
	}

	//methods for radios groups
	static toggleVisibility(el){
		console.log('hello')
		if(el.style.visibility==='visible')
			el.style.visibility='hidden';
		else el.style.visibility='visible';
	}

	static hideOnClickOutside(el,target){
		  if (el.style.visibility==='visible'&& target!=skirtBtn&&
	  		target !== levelBtn && !isChildOf(target, el)) {
	    	el.style.visibility='hidden';
  		}
	}
}

//utils  methods
function generateRandArr(num){
	let nums = Array.from({ length: num/2}, (v, k) => k+1);
    ranNums = [],
    i = nums.length,
    j = 0;

	while (i--) {
	    j = Math.floor(Math.random() * (i+1));
	    ranNums.push(nums[j]);
	    nums.splice(j,1);
	}

	return ranNums;
}


function isChildOf(child, parent) {
  if (child.parentNode === parent) {
    return true;
  } else if (child.parentNode === null) {
    return false;
  } else {
    return isChildOf(child.parentNode, parent);
  }
}