import React , {Component} from 'react';
import hearts from './416px-SuitHearts.svg';
import diamonds from './480px-SuitDiamonds.svg';
import clubs from './SuitClubs.svg';
import spades from './SuitSpades.svg';
import './Card.css';

class Card extends Component {

    constructor(args) {
        super(args);
        this.state = {value : 10, suit: SuitEnum.clubs}
    }

    render() {
        return(
            <div className="card" >
                <img src={this.state.suit} alt="boo" className="suit left"/>
                <br/>
                <span className="val left">{this.state.value}</span>
                <br/>
                <img src={this.state.suit} alt="boo" className="suit-large"/>
                <br/>
                <span className="val right">{this.state.value}</span>
                <img src={this.state.suit} alt="boo" className="suit right"/>
            </div>
        )
    }
}

export default Card;

const SuitEnum = Object.freeze({"diamonds" : diamonds, "clubs": clubs, "hearts" : hearts, "spades" : spades});