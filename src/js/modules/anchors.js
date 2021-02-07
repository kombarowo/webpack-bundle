export default function initAnchors() {
  const anchors = document.querySelectorAll('[data-anchor]')

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const target = document.querySelector('.' + anchor.dataset.anchor)

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
}