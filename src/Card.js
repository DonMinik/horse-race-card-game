import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.value, suit: props.suit, hidden: props.hidden ? props.hidden : false}
    }


    render() {
        let card;
        if (!this.state.hidden) {
            card = <div className="card">
                    <img src={this.state.suit} alt="boo" className="suit left"/>
                    <span className="val left">{this.state.value}</span>
                    <img src={this.state.suit} alt="boo" className="suit-large"/>
                    <span className="val right">{this.state.value}</span>
                    <img src={this.state.suit} alt="boo" className="suit right"/>
                </div>;
                }  else {
                card = <div className="card hidden"/>
                }
            return (<div>{card}</div>);
        }
}


export default Card;
