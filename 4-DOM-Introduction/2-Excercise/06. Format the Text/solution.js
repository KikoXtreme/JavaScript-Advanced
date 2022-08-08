function solve() {
  let text = document.getElementById('input');
  let splited = text.value.split('.').filter((el) => el !== '');
  let output = document.getElementById('output');

  for (let i = 0; i < splited.length; i += 3) {
    let array = [];

    for (let j = 0; j < 3; j++) {

      if (splited[i + j]) {
        array.push(splited[i + j]);
      }
    }

    let result = array.join('. ') + '.';

    output.innerHTML += `<p>${result}</p>`;
  }
}