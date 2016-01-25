$(document).ready(function(){

function newShoppingItem (){
  $("#addNewItem").on("click", function createEntry (){
    var goods = $("#inputItem").val();
    var goodsprice = $("#inputPrice").val();
    if ($.isNumeric(goodsprice) == false) {
      alert("Please input a number for the price field");
      return;
    } else if (goods=="") {
      alert("Item name cannot be blank");
      return;
    }
    var newrow = $("<div>").addClass("row");
    var newname = $("<div>").addClass("col-md-3").text(goods);
    var newprice = $("<div>").addClass("col-md-3").addClass("pricing").text("$"+goodsprice);
    var newlabel = $("<label>").text("QTY");
    var newinput = $("<input>").addClass("enterqty").attr("value","0");
    var newbutton = $("<button>").addClass("enter").text("Cancel");
    var newqty = $("<div>").addClass("col-md-3").append(newlabel).append(newinput).append(newbutton);
    var newsubtotal = $("<div>").addClass("col-md-3").addClass("subtots").text("$0.00");
    var whole = newrow.append(newname).append(newprice).append(newqty).append(newsubtotal);
    $("#entrypoint").prepend(whole);
  });
}

function removeShoppingItem (){
  $("#entrypoint").on("click",".enter", function deleteEntry (){
    $(this).parent().parent().remove();
    $(".btn").click();
  });
}

function calculateTotals () {
  $(".btn").on("click", function update (){
    var pricearray=[];
    var qtyarray=[];
    var subtotalarray = [];
    var check = $(".pricing").text().split("$");
    check.shift();
    for (var i=0;i<check.length; i++){
      pricearray[i]=parseFloat(check[i]);
    }
    qtyarray = $('.enterqty').map(function(){return $(this).val();}).get();
    var finaltotal=0;
    for (var x=0;x<check.length;x++){
      subtotalarray[x] = pricearray[x]*qtyarray[x];
      finaltotal = finaltotal+subtotalarray[x];
    }
    var counter=0;
    $(".subtots").map(function(){
      $(this).text("$"+subtotalarray[counter].toFixed(2));
      counter = counter+1;
    })
    console.log(finaltotal);
    $("#totalPrice").text("$"+finaltotal.toFixed(2));
  });
}

newShoppingItem();
removeShoppingItem();
calculateTotals();

});