$(document).ready(function(){ // do not remove - insert all code in here!
  console.log("connected");

  var $itemsList = $('#items-list');

  function createItemName() {  // add code to prevent being left blank
    // obtain item value
    var newItem = $('#new-item-name').val();
    // append item name into item name column
    var $itemName = $('<div>').addClass('item-name col-xs-4');
    $itemName.text(newItem);
    // "<div class="item-name col-xs-4">Name</div>"
    return $itemName;
  };

  function createItemPrice() {  // add code to ensure input is a number
    // obtain price value
    var newPrice = parseFloat($('#new-item-price').val()).toFixed(2);
    // append item price into item price column
    var $itemPrice = $('<div>').addClass('item-price col-xs-3');
    $itemPrice.text("$" + newPrice);
    // <div class="item-price col-xs-3">$price</div>
    return $itemPrice;
  };

  function addItem(name, price) {
    // create item row
    $itemRow = $('<div>').addClass('item-row');
    $itemRow.append(name).append(price);
    // create quantity input
    var $quantity = $('<div>').addClass('item-qty col-xs-3');
    var $quantityLabel = $('<label>').text("QTY");
    var $quantityInput = $('<input>').attr({ class:'quantity', value:'0' });
    var $cancelButton = $('<button>').addClass('cancel').text("Cancel")
    $quantity.append($quantityLabel).append($quantityInput).append($cancelButton);
    // create subtotal
    var $subTotal = $('<div>').addClass('sub-total col-xs-2').text("$0.00");
    // append item, price, quantity, subtotal to row
    $itemRow.append($quantity).append($subTotal);

    $itemsList.prepend($itemRow);

    bindSubTotalPrice();// rebind all quantity elements
  };

  function bindSubTotalPrice() {
    $('.quantity').off().on('blur',function() {
      // obtain quantity and item price values
      var qty = parseInt($(this).val());
      console.log(qty);
      var itemPrice = parseFloat($(this).parent().siblings('.item-price').text().substring(1));
      console.log(itemPrice);
      // calculate total item price and update subtotal
      var subTotal = (qty * itemPrice).toFixed(2);
      console.log(subTotal);
      $(this).parent().siblings('.sub-total').text('$' + subTotal);
    });
  };

  //Code below needs fixing
  function calculateTotal() {
    var $allSubTotals = $('.sub-total').each(function(item,element){
      var subtotal = parseFloat($(this).find(".item-subtotal").text().substring(1));
      //still need to add the total
      var total = total + subtotal;
      //});
    total = Number(total).toFixed(2);
    $('#total-price').text('$' + total);
    });
  };


  function cancelItem() {
    $('.cancel').on('click',function() {
      $(this).parent().parent().remove();
    });
  };

  // start shopping cart
  $('#new-item-create').on('click', function() {
    addItem(createItemName(), createItemPrice());
    cancelItem();
  });

  bindSubTotalPrice();
  $('#calc-prices').on('click', calculateTotal);


}); // do not remove