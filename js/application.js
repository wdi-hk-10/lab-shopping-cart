$(document).ready(function(){
//insert all code in here!

//createItem();

//subTotalPrice();

//totalPrice();
  $('input.quantity').keyup(function(){

  });

  $('button.cancel').click(function() {
    $(this).parent().parent().remove();
  });

  /*$('button#new-item-create').click(function() {
     <row class="col-xs-12">
          <div class="item-name col-xs-4"></div>
          <div class="item-price col-xs-3"></div>
          <div class="item-qty col-xs-3">
            <label>QTY</label>
            <input class="quantity" value="0">
            <button class="cancel">Cancel</button>
          </div>
          <div class="item-subtotal col-xs-2">$0.00</div>
        </row>insertAfter('#shopping-list')
  });*/

});