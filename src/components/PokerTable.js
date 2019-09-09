import React, { Component } from 'react';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck';
import './PokerTable.css';

class PokerTable extends Component{
    constructor(){
        super();
        this.deck = new Deck();
        this.deck.create();
        this.deck.shuffle();
        console.log(this.deck.cards);
    }
    render(){
        return(
            <div className="the-table col-sm-12">
                <PokerHand /> {/* Player 1 hand*/}
                <PokerHand /> {/* Community hand*/}
                <PokerHand /> {/* Player 2 hand*/}
            </div>
        )
    }
}

export default PokerTable;