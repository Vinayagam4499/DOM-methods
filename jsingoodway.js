// Encapsulate in a function to avoid polluting global scope
(function () {
    let user = 'John';
    let cartTotal = 0;
  
    function addToCart(itemPrice) {
      cartTotal += itemPrice;
    }
  
    function checkout() {
      // Do something with the cartTotal
    }
  })();


  async function getUserDetails(userId) {
    try {
      const user = await getUser(userId);
      const orders = await getOrders(user.id);
      const orderDetails = await getOrderDetails(orders[0].id);
      // Much better!
    } catch (error) {
      // Handle errors here
    }
  }



  function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero!');
    }
    return a / b;
  }



  function executeCode(code) {
    // A safer approach would be using Function constructor
    const myFunction = new Function(code);
    myFunction();
  }


  function myFunction() {
    'use strict';
    let x = 10;
    console.log(x);
  }


  function myFunction() {
    console.log('Hello');
    let x = 5;
    if (x > 0) {
      console.log('x is positive');
    }
  }

// Using a well-established library like Axios
axios.get(url)
  .then(function (response) {
    // Handle the response
  })
  .catch(function (error) {
    // Handle errors
  });


  
