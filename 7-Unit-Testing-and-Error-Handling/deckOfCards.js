function deckOfCards(cards) {
    let result = [];

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        try {
            result.push(playingCards(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(result.join(' '));

    function playingCards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666 ',
            'C': '\u2663',
        }

        if (faces.includes(face) === false) {
            throw new Error('Invalid Face');
        }

        if (Object.keys(suits).includes(suit) === false) {
            throw new Error('Invalid Suits');
        }
        return (face + suits[suit]).toString();
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);