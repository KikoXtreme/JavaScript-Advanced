function autoEngineeringCompany(array) {
    let cars = {};

    array.forEach(element => {
        let [carBrand, carModel, producedCars] = element.split(' | ');
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = {};
            if (!cars[carBrand][carModel]) {
                cars[carBrand][carModel] = producedCars;
            } else {
                cars[carBrand][carModel] += producedCars;
            }
        } else {
            if (!cars[carBrand][carModel]) {
                cars[carBrand][carModel] = producedCars;
            } else {
                cars[carBrand][carModel] += producedCars;
            }
        }

    });

    for (let [key, value] of Object.entries(cars)) {
        console.log(key);

        for (let [carModel, producedCars] of Object.entries(value)) {
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);