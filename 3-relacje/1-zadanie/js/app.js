document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.querySelectorAll('input[type=checkbox]');

  checkbox.forEach(elem => {
    elem.addEventListener('change', isChecked);
  });

  function isChecked() {
    if (this.checked) {
      this.parentNode.parentNode
        .querySelectorAll('input[type=text]')
        .forEach(elem => {
          elem.disabled = true;
        });
    } else {
      this.parentNode.parentNode.classList.remove('confirm');
      this.parentNode.parentNode
        .querySelectorAll('input[type=text]')
        .forEach(elem => {
          elem.disabled = false;
        });
    }
  }

  function addConfirmClass() {}

  function disableInput() {}
});
