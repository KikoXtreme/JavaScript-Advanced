function fromJSONToHTMLTable(json) {
    let array = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(array));
    array.forEach(element => {
        outputArr.push(makeValueRow(element));
    });
    outputArr.push("</table>");

    function makeKeyRow(array) {
        let result = '<tr>';
        let keys = Object.keys(array[0]);
        for (let key of keys) {
            result += `<th>${escapeHTML(key)}</th>`;
        }
        result += '</tr>';
        return result;
    }

    function makeValueRow(element) {
        let result = '<tr>';
        let keys = Object.keys(element);
        for (let key of keys) {
            result += `<td>${escapeHTML(element[key])}</td>`;
        }
        result += '</tr>';
        return result;
    }

    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
    console.log(outputArr.join('\n'));
}

fromJSONToHTMLTable(`[{"Name":"Stamat", "Score":5.5},{"Name":"Rumen", "Score":6}]`);