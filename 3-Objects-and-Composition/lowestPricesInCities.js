function lowestPricesInCities(array) {
    let catalog = {};

    array.forEach(element => {
        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!catalog[product]) {
            catalog[product] = {};
        }
        catalog[product][town] = price;
    });

    // for (let line in catalog) {
    //     let sorted = Object.entries(catalog[line]).sort((a, b) => a[1] - b[1]);
    //     console.log(`${line} -> ${sorted[0][1]} (${sorted[0][0]})`);
    // }

    for (let [product, towns] of Object.entries(catalog)) {
        let sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);