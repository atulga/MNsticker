document.addEventListener('DOMContentLoaded', function() {
  $.get('https://raw.githubusercontent.com/atulga/MNsticker/images/images.json', function (response) {
    images = JSON.parse(response);
    for (var i = 0; i < images.length; i ++) {
      if ( i % 3 == 0 ) {
        // Open row div
        $('#images').append('<div class="row text-center">')
      }

      $('#images').append('<div class="col-md-4 col-xs-4 col-lg-4"><img src="' + images[i] + '" alt="" style="width: 160px; height: 160px"></div>');

      if ( i % 3 == 2 ) {
        // Close row div
        $('#images').append('</div>')
      }
    }
  });
});
