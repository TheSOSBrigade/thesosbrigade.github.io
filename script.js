$('button').on('mouseover', function() {
  $(this).css({
    'top': Math.random() * (window.innerHeight - $('button').height() + 1) + "px",
    'left': Math.random() * (window.innerWidth - $('button').width() / 1.5 + 1) + "px"
  });
})

$('.drag')
  .drag(function( ev, dd ){
      $( this ).css({
          top: dd.offsetY,
          left: dd.offsetX
      });
  });

window.addEventListener("load", (event) => {
  new cursoreffects.bubbleCursor();
});