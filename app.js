document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll(".button");
  const cartValue = document.getElementById("cart-value");
  const arr = [];
  let price = 0;

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Increment the cart value
          let currentValue = parseInt(cartValue.innerText);
          cartValue.innerText = currentValue + 1;

          // Retrieve book details
          let bookContainer = button.parentElement.parentElement;
          let bookName = bookContainer.querySelector('h3').innerText;
          let bookPrice = parseFloat(bookContainer.querySelector('p').innerText.substring(1));
          price += bookPrice;

          // Log book details to console and store in arr
          const bookDetails = `Book Name: ${bookName}, Price: $${bookPrice.toFixed(2)}`;
          arr.push(bookDetails);
      });
  });

 
  const cart = document.getElementById("cart");
  cart.addEventListener('click', function() {
      
      arr.forEach(function(item) {
          console.log(item);
      });

      
      console.log(`The total amount is $${price.toFixed(2)}`);

      
      const message = encodeURIComponent(`Books in Cart:\n\n${arr.join('\n')}\n\nTotal Amount: $${price.toFixed(2)}`);
   //   \n is used for new line , formatting 
     
      const whatsappURL = `https://wa.me/?text=${message}`;
      window.open(whatsappURL, '_blank');
  });
});
