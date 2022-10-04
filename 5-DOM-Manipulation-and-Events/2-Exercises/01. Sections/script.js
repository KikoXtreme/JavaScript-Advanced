function create(words) {

   for (let word of words) {
      let content = document.getElementById('content');
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.style.display = 'none';
      para.textContent = word;

      content.appendChild(div);
      div.appendChild(para);

      div.addEventListener('click', onClick);
   }

   function onClick(ev) {
      ev.target.children[0].style.display = 'block';
   }
}

/*
function create(words) {

   for (let word of words) {
      let content = document.getElementById('content');
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.style.display = 'none';
      para.textContent = word;

      content.appendChild(div);
      div.appendChild(para);

      div.addEventListener('click', onClick.bind(para));
   }

   function onClick() {
      this.style.display = 'block';
   }
}
*/