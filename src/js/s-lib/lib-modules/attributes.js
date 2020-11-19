import s from '../core';

s.prototype.addAttribute = function (attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attributeName, value);
  }

  return this;
}

s.prototype.removeAttribute = function (attributeName) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attributeName);
  }

  return this;
}

s.prototype.toggleAttribute = function (attributeName, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attributeName)) {
      this[i].removeAttribute(attributeName);
    } else {
      this[i].setAttribute(attributeName, value);
    }
  }

  return this;
}