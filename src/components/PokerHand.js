import React from 'react';
import Card from './Card';

function PokerHand(props) {
    return(
        <div className="col-sm-2 card">
            <Card />
            <Card />
        </div>
    )
}

export default PokerHand;