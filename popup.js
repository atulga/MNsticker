document.addEventListener('DOMContentLoaded', function() {
  $.get('https://raw.githubusercontent.com/atulga/MNsticker/images/images.json', function (response) {
    images = JSON.parse(response);
    for (var i = 0; i < images.length; i ++) {
      $('#images').append('<div class="col-md-4 col-xs-4 col-lg-4"><img src="' + images[i] + '" alt="" class="img-responsive"></div>');
    }
  });
});
