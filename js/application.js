var debug;

$(document).ready (function()  {

function createRecord () {
  console.log("connected");
  var itemNew = $('.prodName').val();
  var priceNew = $('.prodPrice').val();

  if ($.isNumeric(priceNew) == false) {
    alert('Price must be a numerical value.');
  }  else if (itemNew == '') {
    alert('Item name must be filled.');
  } else {
    priceNew = parseFloat(priceNew).toFixed(2);

    var newItem = '' +
    '<div class = "item-row row">' +
      '<div class = "item-name col-xs-3">' + itemNew + '</div>' +
      '<div class = "item-price col-xs-3">$' + priceNew + '</div>' +
      '<div class = "item-sub col-xs-3">' +
        '<label>QTY</label>' +
        '<input class = "orderQty"></input>' +
        '<button class = "cancel">Cancel</button>' +
      '</div>' +
      '<div class = "item-sub col-xs-3">$0.00</div><br>' +
    '</div>';

  $('#item-list').prepend(newItem);

  }

};

var calcItemTotal = function(price, volume, i) {
  var subItem = $('.item-sub');
  $(subItem[i]).text('$'+(price*volume).toFixed(2))
};

var sumAllTotal = function() {
  var itemPrice = $('.item-price');
  var itemQty = $('.orderQty');
  var itemLength = itemPrice.length;
  var billTotal = 0;
  for (i=0; i<itemLength; i++) {
    var price = $(itemPrice[i]).text().replace('$','');
    if($.isNumeric(itemQty[i].value)) {
      var volume = itemQty[i].value;
    } else {
      var volume = 0;
    }

$('#updateTotal').on('click', function() {
  sumAllTotal()
});

calcItemTotal(price, volume, i);
billTotal += price * volume}

$('#updateTotal').txt('$' + billTotal.toFixed(2))
};



$('#newItemCreator').on('click',createRecord);

$('button.cancel').on('click', function () {
  $(this).parent().parent().remove();
});


});






// }

// onClick of "Create" button
// take input of "item-name" and "item-price"
// create a new "item-row" with the inputs
// append to the "item-list" div

// var =
// function updatePrice () {




// onClick of "Calculate Prices" button
// calculate the "item-sub" for each "item-row" by multiplying "item-qty" by "item-price"
// sum the "item-sub" field for each "item-row" and return value for "totalPrice" in footer






// function removeRecord () {
//   $('#item-list').on('click')


// }

// // onClick of "Cancel" button
// // remove or hide all the inputs of "item-row" div from the "item-list" div
// // hide contents of "item-row" to prevent awkward spacing





// });