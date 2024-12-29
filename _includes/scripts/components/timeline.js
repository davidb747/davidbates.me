function smoothScrollTo(element, target, duration) {
  const start = element.scrollTop;
  const change = target - start;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);  // Normalize progress to 1
    element.scrollTop = start + change * progress;  // Update the scroll position

    if (progress < 1) {
      requestAnimationFrame(animateScroll);  // Keep scrolling until we reach the target
    }
  }

  requestAnimationFrame(animateScroll);  // Start the animation
}
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.timeline-item__icon--clickable');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var content = this.parentElement.querySelector('.card__content');
        var description = this.parentElement.querySelector('.timeline-item__description');
        var timelineTag = this.parentElement.querySelector('.timeline__tag');
        var line = this.parentElement.querySelector('.line');
        const header = content.querySelector('.timeline-item__header');
        var lineInsideLine = this.parentElement.querySelector('.vertical-line');
        if (content.classList.contains('timeline-item-hidden')) {
          content.classList.remove('timeline-item-hidden');
          timelineTag.classList.remove('timeline__tag--hidden');
          var parentDiv  = content.parentElement;
          parentDiv.classList.remove('move-left');
          parentDiv.classList.add('move-right');
          description.classList.remove('card--flat');
          var remtoPixel = 2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
          var distance = Math.abs(description.getBoundingClientRect().bottom - line.getBoundingClientRect().top)+remtoPixel;
          console.log(distance);
          lineInsideLine.style.height = distance + 'px';
          lineInsideLine.style.top = -distance + 'px';
          smoothScrollTo(description, 160, 500); //moves the card to focus in header instead of image
        } else {
          content.classList.add('timeline-item-hidden');
          timelineTag.classList.add('timeline__tag--hidden');
          var parentDiv  = content.parentElement;
          parentDiv.classList.remove('move-right');
          parentDiv.classList.add('move-left');
          description.classList.add('card--flat');
          lineInsideLine.style.top = -1.5 + 'rem';
          lineInsideLine.style.height = 1.5 + 'rem';
        }
      });
    });
  });