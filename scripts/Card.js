class Card{
	constructor(skirt,spriteNum){
		let div=document.createElement('div');
		div.className='card';
		let front=document.createElement('div');
		front.classList='front '+skirt;
		let back=document.createElement('div');;
		back.classList='back sprite sprite-'+spriteNum;
		div.appendChild(front);
		div.appendChild(back);
		desk.appendChild(div);
	}

	static openCard(card){
		card.classList.toggle('backSide');
	}

	static onClick(card){
		let openCards=this.getOpenCards();

		if(openCards.length===0){
			this.openCard(card);
		} 
		else if(openCards.length===1){
			this.openCard(card);
			this.findMatches();
		}
	}

	static findMatches(){
		let openCards=this.getOpenCards();
		let cards=document.getElementsByClassName('card');
		let style1 = window.getComputedStyle(openCards[0].lastChild, false);
		let style2 = window.getComputedStyle(openCards[1].lastChild, false);
		window.setTimeout(function () {
			if(style1.backgroundPosition===style2.backgroundPosition){
				openCards[0].classList.add('fade-out');
				openCards[1].classList.add('fade-out');
				openCards[0].classList.remove('backSide');
				openCards[0].classList.remove('backSide');
				let hasCards;
				for(let c of cards){
					if(c.className==='card') hasCards=true;
				}
				if(!hasCards) Game.showWin();
			}
			else{
				openCards[0].classList.remove('backSide');
				openCards[0].classList.remove('backSide');
			}
		}, 1000);
	}

	static getOpenCards(){
		return document.getElementsByClassName("card backSide");
	}
}
