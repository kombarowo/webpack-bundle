export default function initAnchors() {
  const items = document.querySelectorAll('[data-anchor]');

  console.log(items);

  items.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector('.' + item.dataset.anchor);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
}