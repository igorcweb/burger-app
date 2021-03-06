$(function() {
  //New Burger
  $('.insert-form').on('submit', event => {
    event.preventDefault();
    const burgerInput = $('#burger');
    const burger = $(burgerInput)
      .val()
      .trim();
    if (burger && burger.match(/^[a-zA-Z0-9,.!'\-\ ]*$/)) {
      const newBurger = { burger_name: burger };
      $.ajax('/api/burgers', { type: 'POST', data: newBurger }).then(() => {
        location.reload();
      });
    } else {
      $('label')
        .fadeOut(100)
        .fadeIn(100);
      burgerInput.val('');
    }
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
