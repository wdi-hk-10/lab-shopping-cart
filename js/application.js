$(document).ready(function(){ // do not remove
  console.log("connected");
  //insert all code in here!

  var itemsList = $('#items-list');

  function createItemName() {
    // obtain item value
    var $newItem = $('#new-item-name').val();
    // append item name into intem column
    var $itemName = $('<div>').addClass('item-name col-xs-4');
    $newItem.append($itemName);
    // append item column into list
    $itemsList = $('#items-list');
    $itemsList.append($newItem);
    return $newItem;
  };

  function createItemPrice() {

  };



  function createItem() {
  //var createItem = function(){

    // check price is a number
    var itemName = $('#new-item-name').val();
    //var previousItem = $('item-name').text()//jules line
    var itemPrice = $('#new-item-price').val();


    // if ($.isNumeric(itemPrice) == false){
    //  alert('Price must be a number');
    //} else if (itemName == ''){
    // alert('Item name cannot be empty');
    //} else {
      itemPrice = Number(itemPrice).toFixed(2);
      var newItem = '' +
      '<row class="col-xs-12 ">' +
        '<div class="item-name col-xs-4">'+ itemName + '</div>' +
        '<div class="item-price col-xs-3">$'+ itemPrice + '</div>' +
        '<div class="item-qty col-xs-3">' +
          '<label>QTY</label>' +
          '<input class="quantity" value="0">' +
          '<button class="cancel">Cancel</button>' +
        '</div>' +
        '<div class="subtotal col-xs-2">$0.00</div>' +
        '</row>'

      $('#items-list').prepend(newItem);
      // using animation
      //$(newItem).prependTo($('#items-list')).slideDown('slow');
    //}
  };

  $('#new-item-create').on('click', function(){
    createItem();
  });


  //var itemPrice = parseFloat($('.item-price').text().substring(1)); //substring removes $ sign
  //var subTotal = $('.item-subtotal').text().substring(1); //substring removes $ sign

  //var Jules = $('.quantity').parent().closest('.item-price').text();

  function subTotalPrice() {
    $('.quantity').on('click',function() {
      var qty = parseInt($(this).val());
      var itemPrice = parseFloat($(this).parent().siblings('.item-price').html().split('$').splice(1,1)); //Jon
      var subTotal = (qty * itemPrice).toFixed(2);
      $(this).parent().siblings('.subTotal').text('$' + subTotal); //Jon
    //var itemPrice = qty.parent().text();
  console.log(qty);
  console.log(itemPrice);
  console.log(subTotal);
    });
  };

  //total price
  //totalPrice();

  //$('button#calc-prices').on('click',function() {
  //});

  //var total =
  //$('input.quantity').keyup(function(){

  //});


  function cancelItem() {
    $('.cancel').on('click',function() {
      $(this).parent().parent().remove();
      //$(this).parent().parent().fadeOut("slow", function(){
        //$(this).remove();
        //}
      });
  };

  //start shopping cart
  //$('#submit').on('click', function() {
    createItemName();
    //subTotalPrice();
    //cancelItem();
  //});

}); // do not remove