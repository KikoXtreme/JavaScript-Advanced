function solve() {
  let [input, output] = Array.from(document.querySelectorAll('textarea'));
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  let table = document.querySelector('table.table tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(ev) {
    let data = JSON.parse(input.value);

    for (let item of data) {

      let row = document.createElement('tr');

      let imgCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let decorCell = document.createElement('td');
      let markCell = document.createElement('td');

      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      let decorF = document.createElement('p');
      decorF.textContent = item.decFactor;
      decorCell.appendChild(decorF);

      let check = document.createElement('input');
      check.type = 'checkbox';
      markCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decorCell);
      row.appendChild(markCell);

      table.appendChild(row);
    }
  }

  function buy(ev) {
    let furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decorF: Number(r.children[3].textContent),
      }));

    let name = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      name.push(item.name);
      total += item.price;
      decFactor += item.decorF;
    }

    let result = `Bought furniture: ${name.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;

    output.value = result;
  }
}

/*
function solve() {
  let [input, output] = Array.from(document.querySelectorAll('textarea'));
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  let table = document.querySelector('table.table tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  let items = [];

  function generate(ev) {
    let data = JSON.parse(input.value);

    for (let item of data) {

      let row = document.createElement('tr');

      let imgCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let decorCell = document.createElement('td');
      let markCell = document.createElement('td');

      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      let decorF = document.createElement('p');
      decorF.textContent = item.decFactor;
      decorCell.appendChild(decorF);

      let check = document.createElement('input');
      check.type = 'checkbox';
      markCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decorCell);
      row.appendChild(markCell);

      items.push({
        element: row,
        isChecked,
        item,
      });

      table.appendChild(row);

      function isChecked() {
        return check.checked;
      }
    }
  }

  function buy(ev) {
    let furniture = items
      .filter(i => i.isChecked())
      .reduce((acc, { item: c }, i, a) => {
        acc.names.push(c.name);
        acc.total += Number(c.price);
        acc.decFactor += Number(c.decFactor) / a.length;
        return acc;
      }, { names: [], total: 0, decFactor: 0 });

    let result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}
*/

// function solve() {

//   const table = document.querySelector('table.table tbody');

//   const [input, output] = Array.from(document.querySelectorAll('textarea'));
//   const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

//   generateBtn.addEventListener('click', generate);
//   buyBtn.addEventListener('click', buy);

//   const items = [];

//   function generate(e) {
//     const data = JSON.parse(input.value);

//     for (let item of data) {
//       const checkBox = createElement('input', { type: 'checkbox' });

//       const row = createElement('tr', {},
//         td(createElement('img', { src: item.img })),
//         td(p(item.name)),
//         td(p(item.price)),
//         td(p(item.decFactor)),
//         td(checkBox)
//       );

//       items.push({
//         element: row,
//         isChecked,
//         item
//       });

//       table.appendChild(row);

//       function isChecked() {
//         return checkBox.checked;
//       }
//     }
//   }

//   function p(...content) {
//     return createElement('p', {}, ...content);
//   }

//   function td(...content) {
//     return createElement('td', {}, ...content);
//   }

//   function createElement(type, props, ...content) {
//     const element = document.createElement(type);

//     for (let prop in props) {
//       element[prop] = props[prop];
//     }
//     for (let entry of content) {
//       if (typeof entry == 'string' || typeof entry == 'number') {
//         entry = document.createTextNode(entry);
//       }
//       element.appendChild(entry);
//     }

//     return element;
//   }

//   function buy(e) {

//     const furniture = items
//       .filter(i => i.isChecked())
//       .reduce((acc, { item: c }, i, a) => {
//         acc.names.push(c.name);
//         acc.total += Number(c.price);
//         acc.decFactor += Number(c.decFactor) / a.length;
//         return acc;
//       }, { names: [], total: 0, decFactor: 0 });

//     const result = `Bought furniture: ${furniture.names.join(', ')}
// Total price: ${furniture.total.toFixed(2)}
// Average decoration factor: ${furniture.decFactor}`;

//     output.value = result;
//   }
// }