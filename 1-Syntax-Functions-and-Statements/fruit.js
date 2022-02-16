function fruit(fruit, weight, pricePerKg) {
    let weightKg = (weight / 1000);
    let price = pricePerKg * weightKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);