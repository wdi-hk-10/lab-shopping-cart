$(document).ready(function(){

//List of Variables/Functions needed

//1. Create new item
var createNewItem = function(){
var itemName = $('#new-item-name').val();
var itemPrice = $('#new-item-unit-price').val();

  //If Else statement to define what each input can/cannot do

  if($.isNumeric(itemPrice) == false){
    alert('Please input a number!');
  }else if (itemName == ''){
    alert('Please type a name!');
  }else{
    itemPrice = number(itemPrice).toFixed(2)
    var newItem = '<div class="item row" style="display:none;"><div class="item-name col-xs-4">'+itemName+'</div><div class="item-price col-xs-3">$'+itemPrice+'</div><div class="item-qty col-xs-3"><label>QTY</label><input class="quantity" value="0"><button class="cancel">Cancel</button></div><div class="item-subtotal col-xs-2">$0.00</div></div>';
    $(newItem).prependTo($('#items-list')).slideDown('slow');
  }
};
  //a. Input item price

  //b. Click on create button
  $('#new-item-create').on('click', function(){
    createNewItem();
  });

//2. Input item QTY
//a. Cancel item
//3. Calculate price button
//4.

});