const s = function (selector) {
  return new s.prototype.init(selector);
}

s.prototype.init = function (selector) {
  const items = document.querySelectorAll(selector);

  if (!items) {
    return this;
  }

  Object.assign(this, items);
  this.length = items.length;

  return this;
}

s.prototype.init.prototype = s.prototype;

window.s = s;

export default s;