$(function() {
    //change devoured state on click
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
      if (newDevour != true) {
      var eatenState = {
        devoured: true
      };
    } else {
      var eatenState = {
      devoured: false
    }};
    console.log(eatenState);
      //put request to update burger
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          //reload page, update list
          location.reload();
        }
      );
    });
  
    $(".form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      //POST request to insert new Burger data into burgers table
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger Made to Order");
          //reload page, update list
          location.reload();
        }
      );
    });
  });
  