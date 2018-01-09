$(document).ready(function() {

  function getCurrentItems() {
    $.ajax({
      url: "/getitems",
      method: "GET",
      success: currentBasket
    })
  }

  function currentBasket(data) {
    if (data.length === 0)
      return;

    $('.date').html(data[0].date);


    for (var i = 0; i < data.length; i++) {
      $li = $('<ol/>');
      $li.html(data[i].Items);

      $liR = $('<ol/>');
      $liR.html(data[i].RequiredBy);

      $('.item').append($li);
      $('.RequiredBy').append($liR);
    }


  }

  function addItems() {
    const date = $('#date').val();
    const RequiredBy = $('#RequiredBy').val();
    const Items = $('#Items').val();
    const data = {
      date: date,
      RequiredBy: RequiredBy,
      Items: Items
    }
    $.ajax({
      url: "/additems",
      method: "POST",
      data: data,
      success: getCurrentItems,
    })
  }

  function init() {
    getCurrentItems();
    $('.btn').on('click', addItems);
  }
  init();
})
