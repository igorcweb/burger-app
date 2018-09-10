// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //New Burger
  $('.insert-form').on('submit', event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burger')
        .val()
        .trim()
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });

  //Devour Burger
  $(document).on('click', '.devour', function(e) {
    e.preventDefault();
    const id = $(this).data('id');
    const devoured = {
      devoured: true
    };
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: devoured
    }).then(() => {
      location.reload();
    });
  });

  //Digest Burger
  $(document).on('click', '.digest', function(e) {
    e.preventDefault();
    const id = $(this).data('id');
    $.ajax('/api/burgers/' + id, {
      type: 'DELETE'
    }).then(function() {
      location.reload();
    });
  });
});
