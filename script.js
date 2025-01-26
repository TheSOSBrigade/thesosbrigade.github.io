$('button').on('mouseover', function() {
  $(this).css({
    'top': Math.random() * (window.innerHeight - $('button').height() + 1) + "px",
    'left': Math.random() * (window.innerWidth - $('button').width() / 1.5 + 1) + "px"
  });
})

window.addEventListener("load", (event) => {
  new cursoreffects.bubbleCursor();
});