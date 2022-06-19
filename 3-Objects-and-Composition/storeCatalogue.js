function storeCatalogue(array) {
    const result = {};

    array.forEach(element => {
        let [product, price] = element.split(' : ');
        price = Number(price);
        let firstLetter = product[0];

        if (!result[firstLetter]) {
            result[firstLetter] = {};
        }
        result[firstLetter][product] = price;
    });

    let initialSorted = Object.keys(result).sort((a, b) => a.localeCompare(b));
    
    for (let key of initialSorted) {
        let products = Object.entries(result[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);

        for (let line of products) {
            console.log(`  ${line[0]}: ${line[1]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);