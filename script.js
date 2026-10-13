
// Inicializar EmailJS con tu Public Key
emailjs.init("7Z6aYavp3i-QZGb6F");

const btn = document.getElementById('button');
const form = document.getElementById('form');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');
const toastIcon = document.getElementById('toast-icon');

// Función para mostrar la notificación flotante
function showToast(message, isError = false) {
    toastText.textContent = message;
    toastIcon.innerHTML = isError ? '&#10008;' : '&#10004;';
    
    if (isError) {
        toast.classList.add('error');
    } else {
        toast.classList.remove('error');
    }
    
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.disabled = true;
    btn.innerText = 'Enviando...';

    const serviceID = 'service_ia95y1g';
    const templateID = 'template_53xp667';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.disabled = false;
            btn.innerText = 'Enviar Mensaje';
            showToast('¡Mensaje enviado con éxito!');
            form.reset();
        }, (err) => {
            btn.disabled = false;
            btn.innerText = 'Enviar Mensaje';
            showToast('Error al enviar: ' + (err.text || 'Inténtalo de nuevo'), true);
        });
});