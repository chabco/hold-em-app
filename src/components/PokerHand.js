import React from 'react';
import Card from '../components/Card';

function PokerHand(props) {
    console.log(props)
    let hand = props.cards.map((i, j) => {
        return(
            <Card key={j} card={i} />
        )
    })
    return(
        <div className="poker-hand col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand;