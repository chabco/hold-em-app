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
        <div className="col-sm-2 card">
            {hand}
        </div>
    )
}

export default PokerHand;