$('button').on('mouseover', function() {
  $(this).css({
    'top': Math.random() * (window.innerHeight - $('button').height() + 1) + "px",
    'left': Math.random() * (window.innerWidth - $('button').width() / 1.5 + 1) + "px"
  });
})

function makeDraggable(element) {
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;
      element.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
      if (isDragging) {
          element.style.left = `${e.clientX - offsetX}px`;
          element.style.top = `${e.clientY - offsetY}px`;
      }
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
      element.style.cursor = 'grab';
  });
}

// Apply draggable functionality to all images
const divs = document.querySelectorAll('.drag');
divs.forEach(div => {
  makeDraggable(div);
});

/* window.addEventListener("load", (event) => {
  new cursoreffects.bubbleCursor();
}); */
