import s from '../core';

s.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add('hide');
  }

  return this;
}

s.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove('hide');
  }

  return this;
}

s.prototype.fadeIn = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove('fadeOut');
    this[i].classList.add('fadeIn');
  }

  return this;
}

s.prototype.fadeOut = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove('fadeIn');
    this[i].classList.add('fadeOut');
  }

  return this;
}

s.prototype.fadeToggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList.contains('fadeIn') && !this[i].classList.contains('fadeOut')) {
      this[i].classList.add('fadeOut');
    } else if (this[i].classList.contains('fadeIn')) {
      this[i].classList.remove('fadeIn');
      this[i].classList.add('fadeOut');
    } else if (this[i].classList.contains('fadeOut')) {
      this[i].classList.remove('fadeOut');
      this[i].classList.add('fadeIn');
    }
  }

  return this;
}