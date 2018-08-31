import React, {Component} from 'react';
import Card from "./Card";
import SuitEnum from "./SuitEnum";

class Deck extends Component{
    constructor(props) {
        console.log("create Deck")
        super(props);
        let cards = [];

        cards.push(new Card({value: 2, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 3, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 4, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 5, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 6, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 7, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 8, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 9, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 10, suit: SuitEnum.hearts}));
        cards.push(new Card({value: 'Q', suit: SuitEnum.hearts}));
        cards.push(new Card({value: 'K', suit: SuitEnum.hearts}));
        cards.push(new Card({value: 'A', suit: SuitEnum.hearts}));

        cards.push(new Card({value: 2, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 3, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 4, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 5, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 6, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 7, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 8, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 9, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 10, suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 'Q', suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 'K', suit: SuitEnum.diamonds}));
        cards.push(new Card({value: 'A', suit: SuitEnum.diamonds}));

        cards.push(new Card({value: 2, suit: SuitEnum.spades}));
        cards.push(new Card({value: 3, suit: SuitEnum.spades}));
        cards.push(new Card({value: 4, suit: SuitEnum.spades}));
        cards.push(new Card({value: 5, suit: SuitEnum.spades}));
        cards.push(new Card({value: 6, suit: SuitEnum.spades}));
        cards.push(new Card({value: 7, suit: SuitEnum.spades}));
        cards.push(new Card({value: 8, suit: SuitEnum.spades}));
        cards.push(new Card({value: 9, suit: SuitEnum.spades}));
        cards.push(new Card({value: 10, suit: SuitEnum.spades}));
        cards.push(new Card({value: 'Q', suit: SuitEnum.spades}));
        cards.push(new Card({value: 'K', suit: SuitEnum.spades}));
        cards.push(new Card({value: 'A', suit: SuitEnum.spades}));

        cards.push(new Card({value: 2, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 3, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 4, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 5, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 6, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 7, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 8, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 9, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 10, suit: SuitEnum.clubs}));
        cards.push(new Card({value: 'Q', suit: SuitEnum.clubs}));
        cards.push(new Card({value: 'K', suit: SuitEnum.clubs}));
        cards.push(new Card({value: 'A', suit: SuitEnum.clubs}));

console.log(cards);
        this.cards = shuffleArray(cards);
        console.log(this.cards);
    }

    render() {
        return(<Card hidden="false"/>);
    }
}

export default Deck;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
    return array;
}