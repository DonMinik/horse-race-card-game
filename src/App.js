import React, { Component } from 'react';
import './App.css';
import SuitEnum from './SuitEnum';
import Jockey from "./Jockey";
import Deck from "./Deck";
import Field from "./Field"
class App extends Component {

    constructor() {
        super();
        this.state = {};
        this.state.deck = new Deck();
        console.log(this.state.deck);
        this.state.jockeys = [];
        this.state.jockeys.push(new Jockey({suit:SuitEnum.diamonds, position: 0}));
        this.state.jockeys.push(new Jockey({suit:SuitEnum.hearts, position: 0}));
        this.state.jockeys.push(new Jockey({suit:SuitEnum.clubs, position: 0}));
        this.state.jockeys.push(new Jockey({suit:SuitEnum.spades, position: 0}));
        this.state.marker = [];
        this.state.marker.push(this.state.deck.cards.pop());
        this.state.marker.push(this.state.deck.cards.pop());
        this.state.marker.push(this.state.deck.cards.pop());
        this.state.marker.push(this.state.deck.cards.pop());
    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <Field deck={this.state.deck} jockeys={this.state.jockeys} marker={this.state.marker} drawnCard={this.state.deck.cards.pop()}>

            </Field>
 </p>
      </div>
    );
  }
}

export default App;


