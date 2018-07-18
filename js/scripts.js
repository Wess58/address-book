$(document).ready(function() {
  $("form#todoListForm").submit(function(event) {
    event.preventDefault();
    var listItem = $("input#todoItem").val();

    $("ul#listDisplay").append('<li class="item active"><input type="checkbox" class="lsItem"> '+listItem+'</li>');
    $("input#todoItem").val("");


    $("input.lsItem").last().change(function(){
      var input = $(this);
      if(input.prop("checked")){
        $(".item").last().toggleClass("inactive");
      }else {
        $(".item").last().toggleClass("inactive");
      }
    });

  });
});
