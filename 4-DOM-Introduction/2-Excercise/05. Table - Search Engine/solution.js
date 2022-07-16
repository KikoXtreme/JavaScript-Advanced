function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField');
      let elements = Array.from(document.querySelectorAll('tbody tr'));

      elements.forEach(element => {

         if (element.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            element.classList.add('select');
         } else {
            element.classList.remove('select');
         }
      });
      input.value = '';
   }
}