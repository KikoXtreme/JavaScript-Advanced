function townPopulation(array) {
    let result = {};

    array.forEach(element => {
        let [location, population] = element.split(' <-> ');
        population = Number(population);

        if (!result[location]) {
            result[location] = population;
        } else {
            result[location] += population;
        }
    });

    for (let [name, population] of Object.entries(result)) {
        console.log(`${name} : ${population}`);
    }
    // for (let name in result) {
    //     console.log(`${name} : ${result[name]}`);
    // }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);