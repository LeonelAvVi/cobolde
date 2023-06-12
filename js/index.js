function enviarWhatsapp(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos de entrada
    var name = document.getElementById('myForm').elements['contact-name'].value;
    var phone = document.getElementById('myForm').elements['contact-phone'].value;
    var mensaje = document.getElementById('myForm').elements['contact-message'].value;

    // Construir la URL de WhatsApp con los datos prellenados
    var whatsappURL = 'https://api.whatsapp.com/send?phone=59171164644&text=Hola,%20soy%20' + encodeURIComponent(name) + '.%20Vengo%20de%20dela%20pagina%20web%20%0AMi%20mensaje%20es:%20' + encodeURIComponent(mensaje);

    // Redirigir al usuario a la página de WhatsApp con los datos prellenados
    window.location.href = whatsappURL;
}
