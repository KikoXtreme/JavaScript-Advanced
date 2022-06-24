function townsToJSON(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].slice(2, -2).split(' | ');
        latitude = Number(latitude).toFixed(2);
        latitude = Number(latitude);
        longitude = Number(longitude).toFixed(2);
        longitude = Number(longitude);

        result.push({
            Town: town,
            Latitude: latitude,
            Longitude: longitude,
        })
    }
    
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);