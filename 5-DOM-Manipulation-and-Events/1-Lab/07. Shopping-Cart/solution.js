function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);

   let result = document.getElementsByTagName('textarea')[0];
   let cart = {};

   function onClick(ev) {

      if (ev.target.classList.contains('add-product')) { //(ev.target.textContent.trim() === 'Add')
         let product = ev.target.parentElement.parentElement;
         let name = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);

         result.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

         Object.keys(cart).includes(name) ? cart[name] += price : cart[name] = price;

      } else if (ev.target.textContent === 'Checkout') {
         let list = Object.keys(cart).join(', ');
         list === '' ? price = 0 : price = Object.values(cart).reduce((a, b) => a + b);

         result.value += `You bought ${list} for ${price.toFixed(2)}.`;

         Array.from(document.querySelectorAll('button')).map(x => x.disabled = true);
      }
   }
}