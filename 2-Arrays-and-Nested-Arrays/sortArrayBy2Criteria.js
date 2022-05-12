function sortArrayBy2Criteria(array) {
    let result = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(result.join('\n'));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);