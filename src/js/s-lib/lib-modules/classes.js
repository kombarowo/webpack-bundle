import s from '../core';

s.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...classNames);
  }

  return this;
};

s.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...classNames);
  }

  return this;
};

s.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }

  return this;
};