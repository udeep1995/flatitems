$(document).ready(function() {

  function getCurrentItems() {

    $.ajax({
      url: "/getitems",
      method: "GET",
      success: developBasket
    })
  }

  function developBasket(data) {

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

function getlastorder(){

  $.ajax({
    url: "/lastorder",
    method: "GET",
    success: lastorderbasket
  })
}

function lastorderbasket(data) {

  if (data.length === 0)
    return;
  $('.lastdate').html(data[0].date);
  for (var i = 0; i < data.length; i++) {
    $li = $('<ol/>');
    $li.html(data[i].Items);
    $liR = $('<ol/>');
    $liR.html(data[i].RequiredBy);
    $('.lastitem').append($li);
    $('.LastRequiredBy').append($liR);
  }
}

  function init() {
    getCurrentItems();
    $('#date').val(""+new Date().getFullYear()+"-"+new Date().getMonth()+1+"-"+new Date().getDate());
    $('.neworderbtn').on('click', addItems);
    $('.lastorderbtn').on('click',getlastorder);
  }
  init();
})
