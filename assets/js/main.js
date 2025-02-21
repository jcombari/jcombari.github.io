// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
   // Usamos fetch para cargar el contenido del archivo navbar.html
   fetch('assets/html/navbar.html')
       .then(response => response.text())
       .then(data => {
           // Insertamos el contenido del archivo navbar.html en el contenedor
           document.getElementById('navbar-container').innerHTML = data;
       })
       .catch(error => {
           console.error("Error al cargar el menú:", error);
       });
});
