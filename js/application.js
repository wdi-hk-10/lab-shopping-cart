
$(document).ready (function()  {

  function createRecord () {
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
        '<div class = "item-tot col-xs-3">$0.00</div><br>' +
      '</div>';

      $('#item-list').prepend(newItem);
    }

    $('button.cancel').off().on('click', function () {
      $(this).parent().parent().remove();
    });
  };

  function calcItemTotal () {
    var sumAllTotal = 0;
    $('.item-row').each(function(index,element) {
      console.log(this);
      var qty = $(this).find('.orderQty').val();
      var priceStr = $(this).find('.item-price').text().substring(1);
      var price = parseFloat(priceStr).toFixed(2);
      var subTotal = price * qty;
      console.log(qty, priceStr, price, subTotal);
      $(this).find('.item-tot').text('$' + subTotal);
      sumAllTotal += subTotal;
    });
    $('#totalPrice').text('$' + sumAllTotal.toFixed(2));
  }


  $('#updateTotal').on('click', calcItemTotal);

  $('#newItemCreator').on('click',createRecord);

  $('button.cancel').off().on('click', function () {
    $(this).parent().parent().remove();
  });


});



