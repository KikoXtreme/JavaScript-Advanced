function cityTax(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * (percent / 100));
        },
    }
    return result;
}

let final = cityTax('Tortuga', 7000, 15000);
console.log(final);
final.collectTaxes();
console.log(final);
final.applyGrowth(15);
console.log(final)
final.applyRecession(20);
console.log(final);