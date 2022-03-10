function timeToWalk(steps, footprint, speed) {
    let distanceMeters = steps * footprint;
    let breaks = (Math.floor(distanceMeters / 500)) / 60;
    let distanceKM = distanceMeters / 1000;
    let time = distanceKM / speed;
    let totalTime = time + breaks;

    let hours = Math.floor(totalTime % 60);
    let minutes = totalTime * 60 % 60;
    let minutesUsed = Math.floor(totalTime * 60 % 60);
    let seconds = Math.round(minutes * 60 % 60);

    if (hours < 10) {
        if (minutesUsed < 10) {
            if (seconds < 10) {
                console.log(`0${hours}:0${minutesUsed}:0${seconds}`);
            } else {
                console.log(`0${hours}:0${minutesUsed}:${seconds}`);
            }
        } else {
            if (seconds < 10) {
                console.log(`0${hours}:${minutesUsed}:0${seconds}`);
            } else {
                console.log(`0${hours}:${minutesUsed}:${seconds}`);
            }
        }
    } else {
        if (minutesUsed < 10) {
            if (seconds < 10) {
                console.log(`${hours}:0${minutesUsed}:0${seconds}`);
            } else {
                console.log(`${hours}:0${minutesUsed}:${seconds}`);
            }
        } else {
            if (seconds < 10) {
                console.log(`${hours}:${minutesUsed}:0${seconds}`);
            } else {
                console.log(`${hours}:${minutesUsed}:${seconds}`);
            }
        }
    }
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);