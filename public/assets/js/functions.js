$('#addBurger').on('submit', (event)=>{
    var newBurger = {
        burger_name: $('#textBar').val().trim(),
    };
    $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then(()=>{
        console.log("New Burger:", newBurger.burger_name);        
        $('#textBar').val("");
        location.reload();
      }
    );
});

$('.devour').click((event)=>{
    var name = $(this).attr('name');
    console.log(name);

    //AJAX Put REQUEST

    // $.ajax('/api/burgers/:name', {
    //     type: 'PUT',
    //     data: 
    // }).then(()=>{

    // })
});