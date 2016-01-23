$(document).ready(function(){
//


function priceCalculation (){
  console.log ('listened');
  //1. Return Subtotal Price
  var listedPrice = $(this).parent().parent().find('.itemPrice').html().split('$')[1];

  var listedQuantity = $(this).val();

  var subtotalPrice = $(this).parent().parent().find('.subtotal');

  subtotalPrice.html('$'+(listedPrice * listedQuantity)+'.00');

  //2. Return Total Price

  var allSubtotals = $('.subtotal')
  var k = [];
  for (var i=0; i<allSubtotals.length; i++){
    k.push(parseInt(allSubtotals.eq(i).html().split('$')[1]));
  };
  var totalPrice = k.reduce(function(a,b) {
    return a + b;
  }) //<- calculates total price

//3. Changes result of Total Price
  $('#totalPrice > h1').html("Total Price: $" + totalPrice + ".00");
  }

function createItem (){
  var inputName = $('#inputItem').find('input').eq(0).val();
  var inputPrice = $('#inputItem').find('input').eq(1).val();
  var $insertItem = '<div class="row item"><div class="itemName col-xs-3">' + inputName + '</div><div class="itemPrice col-xs-3">' + '$'+inputPrice + '.00</div><div class="col-xs-3"><label style="padding-right: 5px">QTY</label><input class="quantity" value="0"><button class="cancel">Cancel</button></div><div class="col-xs-3 subtotal">$0.00</div>';
  function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }
  if (inputName==""){
    alert("Please enter an item name.")
  } else if (inputPrice==""){
    alert("Please enter a price!")
  } else if (isInt(inputPrice)==false){
    alert("Please enter a price that's a whole number!")
  } else {
    $($insertItem).insertAfter($('#descriptionHeader'));
  }
  keyupQuantityInput();
}

function deleteItem(){
  $(this).closest('.item').remove();
}

function keyupQuantityInput(){
  $('.quantity').on("focusout",priceCalculation);
}

$('.cancel').on('click',deleteItem);
$('#create').on('click', createItem);
$('').on()
keyupQuantityInput();


});


