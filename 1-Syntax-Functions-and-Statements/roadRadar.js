function roadRadar(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    let difference = 0;
    let status = '';
    let limit = '';

    if (area === 'city') {
        difference = speed - cityLimit;
        limit = cityLimit;
    } else if (area === 'residential') {
        difference = speed - residentialLimit;
        limit = residentialLimit;
    } else if (area === 'interstate') {
        difference = speed - interstateLimit;
        limit = interstateLimit;
    } else if (area === 'motorway') {
        difference = speed - motorwayLimit;
        limit = motorwayLimit;
    }

    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');