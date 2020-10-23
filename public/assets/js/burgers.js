$(function(){
    $('.burger-devour').on('click', function(event){
        var id = $(this).data('id');
        var newDevour = $(this).data('newDevour');

        var devourState = {
            devour: newDevour
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devourState
        }).then(
            function(){
                console.log('changed devour:', devourState);
                location.reload();
            }
        )
        console.log('CLICK')
    })
    $('.create-form').on('submit', function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $('#b').val().trim(),
        }
    })

});