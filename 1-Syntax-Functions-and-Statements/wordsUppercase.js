function wordsUppercase(str) {
    let pattern = /\w+/g;

    let match = pattern.exec(str);
    let result = [];

    while (match !== null) {
        result.push(match[0]);

        match = pattern.exec(str);
    }
    let total = result.join(', ');
    console.log(total.toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');