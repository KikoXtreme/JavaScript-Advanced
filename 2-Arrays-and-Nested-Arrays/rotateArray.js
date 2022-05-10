function rotateArray(array, num) {

    for (let i = 0; i < num; i++) {
        let last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);