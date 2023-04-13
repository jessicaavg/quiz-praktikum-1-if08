function insrt(num) {
  $('.tampil').val($('.tampil').val() + num);
}
function eql() {
  $('.tampil').val(eval($('.tampil').val()));
}
function AC() {
  $('.tampil').val('');
}
function del() {
  value = $('.tampil').val();
  $('.tampil').val(value.substring(0, value.length - 1));
}

$('#lightmode-togle').change(() => {
  if ($('#lightmode-togle').is(':checked')) {
    $('.main').css('background-color', '#dbd7d7');
    $('.tampil').css('color', '#39383d');
    $('.btninput').css('background-color', '#f1ebdf');
    $('.tombol').css('color', 'black');
    $('#ijo').css('color', ' #13d1b8');
    $('#ijo1').css('color', ' #13d1b8');
    $('#ijo2').css('color', ' #13d1b8');
    $('#ijo3').css('color', ' #13d1b8');
    $('#merah').css('color', ' #d84e55');
    $('#merah1').css('color', ' #d84e55');
    $('#merah2').css('color', ' #d84e55');
    $('#merah3').css('color', ' #d84e55');
    $('#merah4').css('color', ' #d84e55');
  } else {
    $('.main').css({ 'background-color': '#292d36' });
    $('.tampil').css('color', '#f1ebdf');
    $('.btninput').css('background-color', '#39383d');
    $('.tombol').css('color', '#f1ebdf');
    $('#ijo').css('color', ' #13d1b8');
    $('#ijo1').css('color', ' #13d1b8');
    $('#ijo2').css('color', ' #13d1b8');
    $('#ijo3').css('color', ' #13d1b8');
    $('#merah').css('color', ' #d84e55');
    $('#merah1').css('color', ' #d84e55');
    $('#merah2').css('color', ' #d84e55');
    $('#merah3').css('color', ' #d84e55');
    $('#merah4').css('color', ' #d84e55');
  }
});
