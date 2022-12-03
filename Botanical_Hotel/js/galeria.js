$(document).ready(function() {
  $('.gallery-001').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{enabled:true}
    // other options
  });
});
