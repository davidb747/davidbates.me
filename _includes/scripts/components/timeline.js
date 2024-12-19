document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.timeline-item__icon--clickable');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var content = this.parentElement.querySelector('.card__content');
        var description = this.parentElement.querySelector('.timeline-item__description');
        var timelineTag = this.parentElement.querySelector('.timeline__tag');
        var line = this.parentElement.querySelector('.line');
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