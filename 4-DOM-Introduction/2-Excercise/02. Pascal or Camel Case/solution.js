function solve() {
  let input = document.getElementById('text');
  let caseInput = document.getElementById('naming-convention');
  let splited = input.value.split(' ');
  let final = '';

  let result = document.getElementById('result');

  if (caseInput.value === 'Camel Case') {
    final += splited[0].toLowerCase();
    for (let i = 1; i < splited.length; i++) {
      final += splited[i][0].toUpperCase() + splited[i].slice(1).toLowerCase();
    }
    result.textContent = final;
  } else if (caseInput.value === 'Pascal Case') {
    for (let i = 0; i < splited.length; i++) {
      final += splited[i][0].toUpperCase() + splited[i].slice(1).toLowerCase();
    }
    result.textContent = final;
  } else {
    result.textContent = 'Error!';
  }
}