function listOfNames(array) {
    let result = array.sort((a, b) => a.localeCompare(b));
    let num = 0;

    for (let names of result) {
        num++;
        console.log(`${num}.${names}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);