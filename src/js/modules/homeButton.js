export default function initHomeButton(btnClass) {
  const button = s(btnClass);
  toggleButton();

  window.addEventListener('scroll', toggleButton);

  function toggleButton() {
    if (pageYOffset > window.innerHeight) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  }
}