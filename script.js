//Mensaje para accesos en mantemimiento
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (event) {
        if (this.getAttribute('href') === '#') {
          event.preventDefault();
          alert('En mantenimiento')
        }
      });
    });
  });