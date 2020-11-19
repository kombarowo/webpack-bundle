import s from '../core';

//show & hide
s.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove('hide');
  }

  return this;
}

s.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add('hide');
  }

  return this;
}

s.prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList.contains('hide')) {
      this[i].classList.remove('hide');
    } else {
      this[i].classList.add('hide');
    }
  }

  return this;
}

//fade
s.prototype.fadeIn = function () {
  for (let i = 0; i < this.length; i++) {
    fadeIn(this[i]);
  }
  return this;
}

s.prototype.fadeOut = function () {
  for (let i = 0; i < this.length; i++) {
    fadeOut(this[i]);
  }
  return this;
}

s.prototype.fadeToggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList.contains('fadeIn') && !this[i].classList.contains('fadeOut')) {
      this[i].classList.add('fadeOut');
    } else if (this[i].classList.contains('fadeIn')) {
      fadeOut(this[i]);
    } else if (this[i].classList.contains('fadeOut')) {
      fadeIn(this[i]);
    }
  }
  return this;
}

function fadeIn(item) {
  item.classList.remove('fadeOut');
  item.classList.add('fadeIn');
}

function fadeOut(item) {
  item.classList.remove('fadeIn');
  item.classList.add('fadeOut');
}

//slide

s.prototype.slideIn = function () {
  for (let i = 0; i < this.length; i++) {
    slideIn(this[i]);
  }
}

s.prototype.slideOut = function () {
  for (let i = 0; i < this.length; i++) {
    slideOut(this[i]);
  }
}

s.prototype.slideToggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].style.maxHeight === '0px') {
      slideIn(this[i]);
    } else {
      slideOut(this[i]);
    }
  }
}

function slideIn(item) {
  item.style.maxHeight = item.dataset.maxHeight;
  item.style.margin = item.dataset.margin;
  item.style.padding = item.dataset.padding;
  item.style.border = item.dataset.border;
}

function slideOut(item) {
  if (item.style.maxHeight !== '0px') {
    item.style.maxHeight = item.offsetHeight + 'px';
    item.dataset.maxHeight = getComputedStyle(item).maxHeight;
    item.dataset.border = getComputedStyle(item).border;
    item.dataset.margin = getComputedStyle(item).margin;
    item.dataset.padding = getComputedStyle(item).padding;
    setTimeout(() => {
      item.style.maxHeight = '0';
      item.style.margin = '0';
      item.style.padding = '0';
      item.style.border = '0px solid transparent';
    }, 0);
  }
}