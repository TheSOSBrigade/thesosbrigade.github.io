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

const divs = document.querySelectorAll('.drag');
divs.forEach(div => {
	makeDraggable(div);
});

$(document).ready(function () {
  $('.drag').each(function () {
    // Calculate random positions for each image
    const randomTop = Math.random() * (window.innerHeight - $(this).height() / 0.9 + 1);
    const randomLeft = Math.random() * (window.innerWidth - $(this).width() / 0.9 + 1);

    // Set the random position
    $(this).css({
      position: 'absolute', // Make sure images are absolutely positioned
      top: randomTop + 'px',
      left: randomLeft + 'px',
    });
  });
});
