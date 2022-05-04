function printArrayWithDelimiter(array, delimeter) {
    let result = array.join(delimeter);

    console.log(result);
}

printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');