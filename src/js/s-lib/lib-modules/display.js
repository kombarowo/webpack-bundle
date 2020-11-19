import s from '../core';

s.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = 'none';
  }

  return this;
}

s.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = '';
  }

  return this;
}