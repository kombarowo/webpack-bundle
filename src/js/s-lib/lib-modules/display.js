import s from '../core';

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

//slide

s.prototype.slideIn = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].style.maxHeight = this[i].dataset.maxHeight;
    this[i].style.margin = this[i].dataset.margin;
    this[i].style.padding = this[i].dataset.padding;
    this[i].style.border = this[i].dataset.border;
  }
}

s.prototype.slideOut = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].style.maxHeight !== '0px') {
      this[i].style.maxHeight = this[i].offsetHeight + 'px';
      this[i].dataset.maxHeight = getComputedStyle(this[i]).maxHeight;
      this[i].dataset.border = getComputedStyle(this[i]).border;
      this[i].dataset.margin = getComputedStyle(this[i]).margin;
      this[i].dataset.padding = getComputedStyle(this[i]).padding;
      setTimeout(() => {
        this[i].style.maxHeight = '0';
        this[i].style.margin = '0';
        this[i].style.padding = '0';
        this[i].style.border = '0px solid transparent';
      }, 0);
    }
  }
}

s.prototype.slideToggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].style.maxHeight !== '0px') {
      this[i].style.maxHeight = this[i].offsetHeight + 'px';
      this[i].dataset.maxHeight = getComputedStyle(this[i]).maxHeight;
      this[i].dataset.border = getComputedStyle(this[i]).border;
      this[i].dataset.margin = getComputedStyle(this[i]).margin;
      this[i].dataset.padding = getComputedStyle(this[i]).padding;
      setTimeout(() => {
        this[i].style.maxHeight = '0';
        this[i].style.margin = '0';
        this[i].style.padding = '0';
        this[i].style.border = '0px solid transparent';
      }, 0);
    } else {
      this[i].style.maxHeight = this[i].dataset.maxHeight;
      this[i].style.margin = this[i].dataset.margin;
      this[i].style.padding = this[i].dataset.padding;
      this[i].style.border = this[i].dataset.border;
    }
  }
}