window.addEventListener("load", function() {
    alert("Bienvenido a mi pagina web, Josue Benitez");
});

Notification.requestPermission().then(permiso => {
  if (permiso === "granted") {
    new Notification("Hola incircunciso");
  }
})