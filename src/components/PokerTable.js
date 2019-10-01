import React, { Component } from 'react';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck';
import './PokerTable.css';
import './pokersolver';

class PokerTable extends Component{
    //constructor MUST run first in JS
    constructor(){
        super();
        this.deck = new Deck();
        this.deck.create();
        this.deck.shuffle();
        console.log(this.deck.cards);
        this.state = {
            playerHand: ['deck', 'deck'],
            dealerHand: ['deck', 'deck'],
            communityHand: ['deck', 'deck', 'deck', 'deck', 'deck'],
            wager: 0,
            bankroll: 100
        }
    }

    // checkHandRank = () => {
    //     // ['Ad', 'As',]
    //     const playPlusComm = [...this.state.playerHand, ...this.state.playPlusComm];
    //     const dealerPlusComm = [...this.state.dealerHand, ...this.state.playPlusComm];
    //     // const playerHandRank = Hand.solve(this.state.playerHand);
    //     // const dealerHandRank = Hand.solve(this.state.dealerHand);
    //     console.log(playerHandRank);
    //     console.log(dealerHandRank);
    // }

    //this method is made by us, not a "react" method
    //in here we deal the first 4 cards
    prepDeck = () => {
        this.deck.create();
        this.deck.shuffle();
        const card1 = this.deck.cards.shift();
        const card2 = this.deck.cards.shift();
        const card3 = this.deck.cards.shift();
        const card4 = this.deck.cards.shift();
        //at this point, this.deck.cards has 48 elements in it, because we removed 4
        this.setState({
            playerHand: [card1, card3],
            dealerHand: [card2, card4],
            communityHand: ['deck', 'deck', 'deck', 'deck', 'deck']
        })
    };


    bet = (amount) => {
        let newWager = this.state.wager + amount;
        let newBankRoll = this.state.bankroll - amount;
        if(newBankRoll >= 0) {
            this.setState({
            wager: newWager,
            bankroll: newBankRoll
            })
        } else {
            this.setState({
                msg: "You don't have enough money!"
            },this.clearMsg)
        }
    }


    clearMsg = ()=> {
        setTimeout(()=>{
            this.setState({
                msg: ""
            })
        }, 2000)
    }

    // check calls to draw a new community card
    // 1. 3 cards (flop)
    // 2. 1 card (turn)
    // 3. 1 card (river)
    check = () =>{
        // console.log("use clicked check")
        // We do not want to mutate or changle state
        // that's react's job
        // Instead we make a copy do stuff to the copy and hand the copy to setState
        let communityNewHand = [...this.state.communityHand];
        if (communityNewHand[0] === 'deck'){

                communityNewHand = [
                    this.deck.cards.shift(),
                    this.deck.cards.shift(),
                    this.deck.cards.shift(),
                    'deck',
                    'deck'
                ]
            } else {
                //its not the flop, we know cause there's already a
                communityNewHand.push(this.deck.cards.shift());
            }
            this.setState({
                communityHand: communityNewHand
            })
        }

    render(){
        return(
            <div className="the-numbers the-table col-12">
                <div className="col-sm-12 text-center">
                    <div className="col-sm-3">
                        Current Pot: ${this.state.wager}
                    </div>
                    <div className="col-sm-3">
                        Bankroll: ${this.state.bankroll}
                    </div>
                </div>
                <div className="player-message">
                    {this.state.msg}
                </div>
                <PokerHand cards={this.state.playerHand}/> {/* Player 1 hand*/}
                <PokerHand cards={this.state.communityHand}/> {/* Community hand*/}
                <PokerHand cards={this.state.dealerHand}/> {/* Player 2 hand*/}
                <button onClick={this.prepDeck} className="btn btn-primary">Deal</button>
                <button onClick={()=>{this.bet(5)}} className="btn btn-success">Bet 5</button>
                <button onClick={this.check} className="btn btn-warning">Check</button>
                <button onClick={this.prepDeck} className="btn btn-danger">Fold</button>
            </div>
        )
    }
}

export default PokerTable;