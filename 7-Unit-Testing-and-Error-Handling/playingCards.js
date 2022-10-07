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

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));