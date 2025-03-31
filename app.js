const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del botón
    
    // Obtener los valores de los inputs
    const data = {
        username: username.value,
        password: password.value
    };

    // Verificar si los campos están vacíos
    if (data.username === "" || data.password === "") {
        // Si los campos están vacíos, actualizar la página (permanece en la misma)
        alert("Por favor, complete ambos campos (Username y Password).");
        window.location.reload(); // Recargar la página para que el usuario se quede en index.html
    } else {
        // Si ambos campos están completos, redirigir a Pagina2.html
        window.location.href = "Pagina2.html";  // Redirigir a Pagina2.html
    }
});

