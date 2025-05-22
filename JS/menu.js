document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('menu-toggle');
  const links = document.querySelectorAll('.navbar-links a');

  // Cierra el menú al hacer clic en cualquier enlace
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (toggle && toggle.checked) {
        toggle.checked = false;
      }
    });
  });

  // Cierra el menú si haces scroll (por si el usuario no toca un enlace)
  window.addEventListener('scroll', () => {
    if (toggle && toggle.checked) {
      toggle.checked = false;
    }
  });
});
