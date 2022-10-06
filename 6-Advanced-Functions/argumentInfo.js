function argumentInfo(...args) {
    let object = {};

    for (let arg of args) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!object[type]) {
            object[type] = 1;
        } else {
            object[type]++;
        }
    }
    Object
        .keys(object)
        .sort((a, b) => object[b] - object[a])
        .forEach(el => console.log(`${el} = ${object[el]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });