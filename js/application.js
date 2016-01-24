$(document).ready(function(){ // do not remove
//insert all code in here!

  //createItem();
  var createItem = function(){
    console.log("connected");
    // must check price is integer
    var itemName = $('#new-item-name').val();
    //var previousItem = $('item-name').text()//jules line
    var itemUnitPrice = $('#new-item-unit-price').val();


    if ($.isNumeric(itemUnitPrice) == false){
      alert('Unit price must be a number');
    } else if (itemName == ''){
      alert('Item name cannot be empty');
    //} else if (itemName == previousItem){ //julesline
    //  alert('Item name cannot be the same'); //julesline
    } else {
      itemUnitPrice = Number(itemUnitPrice).toFixed(2);
      var newItem = '' +
      '<div class="item row">' +
      '<row class="col-xs-12 ">' + //jules line
        '<div class="item-name col-xs-4">'+ itemName + '</div>' +
        '<div class="item-price col-xs-3">$'+ itemUnitPrice + '</div>' +
        '<div class="item-qty col-xs-3">' +
          '<label>QTY</label>' +
          '<input class="quantity" value="0">' +
          '<button class="cancel">Cancel</button>' +
        '</div>' +
        '<div class="item-subtotal col-xs-2"> $0.00 </div>' +
        '</row>' + //jules line
      '</div>';

      $('#items-list').prepend(newItem);
      // using animation
      //$(newItem).prependTo($('#items-list')).slideDown('slow');
    }
  };

  $('#new-item-create').on('click', function(){
    createItem();
  });


  var itemPrice = parseFloat($('.item-price').text().substring(1)); //substring removes $ sign
  //var subTotal = $('.item-subtotal').text().substring(1); //substring removes $ sign

  //var Jules = $('.quantity').parent().closest('.item-price').text();

  //subTotalPrice();
  $('.quantity').on('click',function() {
    var qty = parseInt($(this).val());

    var subTotal = (qty * itemPrice).toFixed(2);

    //var itemPrice = qty.parent().text();

  console.log(qty);
  console.log(itemPrice);
  console.log(subTotal);

  });

  //total price
  //totalPrice();

  $('button#calc-prices').on('click',function() {
  });

  var total =
  $('input.quantity').keyup(function(){

  });

  //Cancel button
  $('button.cancel').on('click',function() {
    $(this).parent().parent().fadeOut("slow", function(){
      $(this).remove();
    });
  });

}); // do not remove