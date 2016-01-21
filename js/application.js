$(document).ready(function(){

function newShoppingItem (){
  $("#addNewItem").on("click", function createEntry (){
    var goods = $("#inputItem").val();
    var goodsprice = $("#inputPrice").val();
    var newrow = $("<div>").addClass("row");
    var newname = $("<div>").addClass("col-md-3").text(goods);
    var newprice = $("<div>").addClass("col-md-3").text("$"+goodsprice);
    var newlabel = $("<label>").text("QTY");
    var newinput = $("<input>").attr("value","0");
    var newbutton = $("<button>").addClass("enter").text("Cancel");
    var newqty = $("<div>").addClass("col-md-3").append(newlabel).append(newinput).append(newbutton);
    var newsubtotal = $("<div>").addClass("col-md-3").text("$0.00");
    var whole = newrow.append(newname).append(newprice).append(newqty).append(newsubtotal);
    $("#entrypoint").prepend(whole);
  });
}

function removeShoppingItem (){
    $("#entrypoint").on("click",".enter", function deleteEntry (){
      $(this).parent().parent().remove();
    });
}






newShoppingItem();
removeShoppingItem();




});