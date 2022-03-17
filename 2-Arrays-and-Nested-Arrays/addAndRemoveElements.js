function addAndRemoveElements(array) {
    let num = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            result.push(num);
        } else if (array[i] === 'remove') {
            result.pop(num);
        }
        num++;
    }
    if (result.length <= 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);