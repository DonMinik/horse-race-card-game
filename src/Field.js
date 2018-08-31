import React, {Component} from 'react';
import './Field.css';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {deck: props.deck, jockeys: props.jockeys, marker: props.marker, drawnCard: props.drawnCard}
        this.card = props.marker[0];
    }

    render() {
        return(
            <div className="field">
                <p className="finish1"/><p className="finish2"/><p className="finish3"/><p className="finish4"/><p className="finish" />
                <p className="track41" /><p className="track42" /><p className="track43" /><p className="track44" /><p className="marker4" >{this.state.marker[3].render()}</p>
                <p className="track31" /><p className="track32" /><p className="track33" /><p className="track34" /><p className="marker3" >{this.state.marker[2].render()}</p>
                <p className="track21" /><p className="track22" /><p className="track23" /><p className="track24" /><p className="marker2" >{this.state.marker[1].render()}</p>
                <p className="track11" /><p className="track12" /><p className="track13" /><p className="track14" /><p className="marker1" >{this.state.marker[0].render()}</p>
                <p className="start1" >{this.state.jockeys[0].render()}</p><p className="start2" >{this.state.jockeys[1].render()}</p><p className="start3" >{this.state.jockeys[2].render()}</p><p className="start4" >{this.state.jockeys[3].render()}</p><p className="start"/>
            <p className="deck" >{this.state.deck.render()}</p><p className="drawn" >{this.state.drawnCard.render()}</p>
            </div>
        );
    }
}

export default Field;