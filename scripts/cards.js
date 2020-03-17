class CardsDeck {
	constructor() {
		this.cards = [];
		// add jokers
		for (let jokertype of Object.values(jokerType)) {
			this.cards.push(new Card(0, jokertype));
		}
		//add cards
		for (let i = 1; i <= 13; i++) {
			for (let cardtype of Object.values(cardType)) {
				this.cards.push(new Card(i, cardtype));
			}
		}
	}
	shuffle() {
		let tempCards = this.cards;
		this.cards = [];
		while (tempCards.length > 0) {
			let randomIndex = random(0, tempCards.length);
			this.cards.push(tempCards[randomIndex]);
			tempCards.splice(randomIndex, 1);
		}
	}
}

const cardType = {
	CLUBS: 'clubs',
	SPADES: 'spades',
	HEARTS: 'hearts',
	DIAMONDS: 'diamonds'
};
const jokerType = {
	RED: 'red',
	BLACK: 'black'
}

function isValidCardType(a, b) {
	if (b == null) {
		if (typeof (a) != "string") {
			throw 'invalid argument type ' + typeof (a);
		}
		//only one argument, a is cardtype ot jokertype
		let cardTypeValues = Object.values(cardType);
		let jokerTypeValues = Object.values(jokerType);
		return cardTypeValues.indexOf(a) != -1 || jokerTypeValues.indexOf(a) != -1;
	} else {
		//two arguments - number and cardtype, order doesn't matter
		let cardtype = null;
		let number = null;
		if (typeof (a) == 'string') {
			cardtype = a;
		} else if (typeof (a) == 'number') {
			number = a;
		} else {
			throw 'invalid argument type ' + typeof (a);
		}
		if (cardtype == null) {
			//expected second argument to be a cardtype - string
			if (typeof (b) != 'string') {
				throw 'invalid argument type ' + typeof (b);
			}
			cardtype = b;
		} else if (number == null) {
			if (typeof (b) != 'number') {
				throw 'invalid argument type ' + typeof (b);
			}
			number = b;
		}
		//has all values
		if (number == 0) {
			//joker
			let jokerTypeValues = Object.values(jokerType);
			return jokerTypeValues.indexOf(cardtype) != -1;
		} else {
			//not joker
			let cardTypeValues = Object.values(cardType);
			return cardTypeValues.indexOf(cardtype) != -1;
		}
	}
}

class Card {
	/*
	number:

	JOKER - 0
	ACE - 1
	2 - 2
	...
	10 - 10
	J - 11
	Q - 12
	K - 13
	*/
	constructor(number, cardtype) {
		if (number < 0 || number > 13) {
			throw 'Invalid number: ' + number;
		}
		this._number = number;
		if (!isValidCardType(cardtype, number)) {
			throw 'Invalid card type: ' + cardtype;
		}
		this._cardType = cardtype;
	}
	get number() {
		return this._number;
	}
	set number(value) {
		if (value < 0 || value > 13) {
			throw 'Invalid number: ' + value;
		}
		this.number = value;
	}
	get cardtype() {
		return this._cardType;
	}
	set cardtype(value) {
		if (!isValidCardType(value, this.number)) {
			throw 'Invalid card type: ' + value;
		}
		this._cardType = value;
	}
	get imageFileName() {
		let nameWithoutExtension = ''
		if (this.number == 0) {
			//joker
			nameWithoutExtension = this.cardtype + "_joker";
		} else {
			let numberRepresentation = '';
			if (this.number == 1) {
				//ace
				numberRepresentation = 'ace';
			} else if (this.number > 1 && this.number <= 10) {
				//regular numbers
				numberRepresentation = this.number.toString();
			} else if (this.number == 11) {
				//jack
				numberRepresentation = 'jack';
			} else if (this.number == 12) {
				//queen
				numberRepresentation = 'queen';
			} else if (this.number == 13) {
				numberRepresentation = 'king';
			} else {
				throw 'Invalid card number: ' + this.number;
			}
			nameWithoutExtension = numberRepresentation + '_of_' + this.cardtype;
		}
		return nameWithoutExtension + ".png";
	}
	get imageUrl() {
		return 'cards/' + this.imageFileName;
	}
}

Card.prototype.toString = function () {
	return this.number.toString() + this.cardtype;
}