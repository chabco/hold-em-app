//no extend because this is not a component
//this is just some OOP JavaScript
class Deck {
    constructor() {
        //no need to call super, because ..no extends
        this.cards = [];
    }

    create(){
        //I make a new deck of cards from nothingf!
        console.log("here's a new deck")
        //A card has a number and a suit
        //two loops: one for suit and one for value
        const suits = ['h', 's', 'd', 'c']
        suits.forEach((suit)=>{
            //inner loop for the value
            for(let c = 1; c <= 13; c++){
                //push onto this deck, c + suit
                this.cards.push(c+suit)
            }
        })
    }

    shuffle(){
        //I take a new deck of cards and shuffle the crap out of them
        console.log("shuffling");
        for(let i = 0; i < 10000000; i++){
            //to shuffle, swap 2 indices in the array many many times
            let rand1 = Math.floor(Math.random() * 52);
            let rand2 = Math.floor(Math.random() * 52);
            //store value in this.deck[rand1] in a temp var
            let temp = this.cards[rand1];
            this.cards[rand1] = this.cards[rand2];
            this.cards[rand2] = temp;
        }
    }
}

export default Deck;