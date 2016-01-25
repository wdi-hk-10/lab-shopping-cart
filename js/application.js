$('document').ready(function(){

  //ADD NEW ROWS
  //take the new inputs, place them in new divs and add them to a row. How do I get the button to work on click?

//how do I create a "new row" and attach the variables to it?

var newItemDescr = $('.descr-input').text();
var newItemPrice = $('.price-input').val();


$('.btn-create').on('click', function () {
  console.log ('hello');
});


// $('.btn-create').on('click',function(){
//   $('<div>').appendTo($('#item-row'));

//   $('.btn-create').on('click',function(){
//     $('.descr-input').appendTo($('#items-list')).before($('#item-row-first'));
//     $('.price-input').appendTo($('#items-list')).before($('#item-row-first'));

//       var descriptionInput = $('.descr-input').appendTo($('#items-list'));

//       var priceInput = $('.price-input').appendTo($('#items-list'));
//   });

  //CALCULATE PRICES

  //subtotals



  // var a = $('.item-price').val();
  // var b = $('.quantity').val();
  // $('.quantity').keyup(function() {
  //   $('.item-subtotal').val(a * b);
  // });


  //DELETE ROWS
  // but how do you know which item-row to remove??? I can't work this out - I know I have to put something in the "remove" function but not sure what. Do i use the .each() function?

  $('.cancel').on('click', function(){
      $('.item-row').remove();
  });

});