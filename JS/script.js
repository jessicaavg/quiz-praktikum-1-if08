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
  