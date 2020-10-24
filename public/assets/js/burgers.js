$(function(){
    $('.burger-devour').on('click', function(event){
        console.log('clicked')
        var id = $(this).data('id');

        var devourState = {
            devoured: true
        };
        location.reload();

        // $.ajax('/api/burgers/' + id, {
        //     type: 'PUT',
        //     data: devourState
        // }).then(
        //     function(){
        //         console.log('changed devour:', devourState);
        //         location.reload();
        //     }
        // )
        // console.log('CLICK')
    })

    $('.create-form').on('submit', function(event){
        event.preventDefault();
        console.log('clicked')

        var newBurger = {
            burger_name: $('#b').val().trim(),
        };

        $.ajax('/api/burgers/', {
            type: 'POST',
            data: newBurger
        }).then(
            function(){
                console.log('new burger');
                location.reload();
            }
        )
    })
    $(".delete-burger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});
