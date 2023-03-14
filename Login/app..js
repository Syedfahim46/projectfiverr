$(function () {

  $('#expert-form-link').click(function (e) {
    $('#user-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#user-form-link').click(function (e) {
    $('#expert-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});