// The + and - buttons are clickable for the product in the cart.
let quantityNum = 1;                                                // number of quantities starting at 1.

function increaseProduct() {
    let plusButton = document.querySelector('#quantity-up');            // selecting the upButton.

    plusButton.addEventListener('click', function() {
        console.log('plus button has been clicked.');                   // logging to ensure plus button works.
        
        quantityNum += 1;                                               // increasing the number of quantities by 1 when clicked.
        console.log(quantityNum);                                       // logging the quantity number. 

        // displaying the quantity updates.
        let quantityUpdate = document.querySelector('.total-quantity'); // selecting the quantity content.
        quantityUpdate.textContent = 'Quantity: ' + quantityNum;        // updating the content with the number of quantityNum clicks.

        });
};

function decreaseProduct() {
    let minusButton = document.querySelector('#quantity-down');         // selecting the downButton.

    minusButton.addEventListener('click', function() {                  
        console.log('minus button has been clicked.');                  // logging to ensure minus button works.

        quantityNum -= 1;                                               // decreasing the number of quantities by 1 when clicked.
        console.log(quantityNum);                                       // logging the quantity number. 

        if (quantityNum < 0) {                                          // if quantityNum is less than 0,
            console.log('reached below zero');
            quantityNum = 0;                                            // keep quantityNum at 0.
        };

        // displaying the quantity updates.
        let quantityUpdate = document.querySelector('.total-quantity'); // selecting the quantity content.
        quantityUpdate.textContent = 'Quantity: ' + quantityNum;        // updating the content with the number of quantityNum clicks.        
    });
};

// calling the functions to use them.
increaseProduct();
decreaseProduct();