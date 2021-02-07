export default function initHomeButton(btnSelector) {
  const button = document.querySelector(btnSelector)
  toggleButton()

  window.addEventListener('scroll', toggleButton)

  function toggleButton() {
    if (pageYOffset > window.innerHeight) {
      button.classList.remove('fadeOut')
      button.classList.add('fadeIn')
    } else {
      button.classList.remove('fadeIn')
      button.classList.add('fadeOut')
    }
  }
}