export default function initHomeButton(btnClass) {
  const button = document.querySelector(btnClass);
  toggleButton();

  window.addEventListener('scroll', toggleButton);

  function toggleButton() {
    if (pageYOffset > window.innerHeight) {
      button.classList.remove('hide');
    } else {
      button.classList.add('hide');
    }
  }
}