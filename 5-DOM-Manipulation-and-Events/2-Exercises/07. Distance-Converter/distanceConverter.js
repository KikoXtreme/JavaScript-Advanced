function attachEventsListeners() {
    let data = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    document.querySelector('#convert').addEventListener('click', onClick);

    function onClick() {
        let input = Number(document.querySelector('#inputDistance').value);
        let inputUnit = document.querySelector('#inputUnits').value;
        let outputUnit = document.querySelector('#outputUnits').value;
        let output = document.querySelector('#outputDistance');

        output.value = input * data[inputUnit] / data[outputUnit];
    }
}

// function attachEventsListeners() {
//     document.getElementById('convert').addEventListener('click', onClick);

//     function onClick(e) {
//         let input = Number(document.getElementById('inputDistance').value);
//         let output = document.getElementById('outputDistance');
//         let unitsIn = document.getElementById('inputUnits').value;
//         let unitsOut = document.getElementById('outputUnits').value;

//         let resultIn = 0;
//         let total = 0;

//         if (unitsIn === 'km') {
//             resultIn = input * 1000;
//         } else if (unitsIn === 'm') {
//             resultIn = input;
//         } else if (unitsIn === 'cm') {
//             resultIn = input * 0.01;
//         } else if (unitsIn === 'mm') {
//             resultIn = input * 0.001;
//         } else if (unitsIn === 'mi') {
//             resultIn = input * 1609.34;
//         } else if (unitsIn === 'yrd') {
//             resultIn = input * 0.9144;
//         } else if (unitsIn === 'ft') {
//             resultIn = input * 0.3048;
//         } else if (unitsIn === 'in') {
//             resultIn = input * 0.0254;
//         }

//         if (unitsOut === 'km') {
//             total = resultIn / 1000;
//         } else if (unitsOut === 'm') {
//             total = resultIn;
//         } else if (unitsOut === 'cm') {
//             total = resultIn / 0.01;
//         } else if (unitsOut === 'mm') {
//             total = resultIn / 0.001;
//         } else if (unitsOut === 'mi') {
//             total = resultIn / 1609.34;
//         } else if (unitsOut === 'yrd') {
//             total = resultIn / 0.9144;
//         } else if (unitsOut === 'ft') {
//             total = resultIn / 0.3048;
//         } else if (unitsOut === 'in') {
//             total = resultIn / 0.0254;
//         }
//         output.value = total;
//     }
// }