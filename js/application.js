$(document).ready(function() {

  function createNewRow() {
    var newItem = $('.new-item').val();
    var newPrice = $('.new-price').val();
    if (newItem == ''){
      alert('Please insert item name.');
    } else if ($.isNumeric(newPrice) == false){
      alert('Price must be a number');
    } else {
      newPrice = Number(newPrice).toFixed(2);
      var newRow = "<li class = 'row'> <div class = 'item col-xs-4'>" + newItem + "</div> <div class = 'price col-xs-3'>" + "$" + newPrice + "</div> <div class = 'quantity col-xs-3'> <label>QTY</label> <input class = 'qty' value = '0'> <button class = 'cancel'>Cancel</button> </div> <div class = 'subtotal col-xs-2'>$0.00</div> </li>";
      $('.shopping-list').prepend(newRow);
    };
  };

  function deleteItem() {
    $(this).parent().parent().remove();
  };

  function returnTotal() {
    var total = 0;
    $('.name').each(function() {
      var quantity = $(this).find('.qty').val();
      var priceStr = $(this).find('.price').text().substring(1);
      var price = parseFloat(priceStr);
      var subtotal = price * quantity;
      var subtotalFix = $(this).find('.subtotal').text('$' + subtotal.toFixed(2));
      total += subtotal;
    });
    $('#total-price').text('$' + total.toFixed(2));
  }

  $('.create').on('click', createNewRow);
  $('.cancel').on('click', deleteItem);
  $('.qty').on('keyup', returnTotal);
  $('.buttonCalc').on('click', returnTotal);

});

