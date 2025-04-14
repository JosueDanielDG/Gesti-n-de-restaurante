document.addEventListener('DOMContentLoaded', function() {

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    
   
    if (usernameInput && passwordInput && loginButton) {
      
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();  
            
            
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            
            if (username === "" || password === "") {
                alert("Por favor, complete ambos campos (Username y Password).");
                
            } else {
                
                if (validateCredentials(username, password)) {
                   
                    localStorage.setItem('currentUser', username);
                   
                    window.location.href = "Pagina2.html";
                } else {
                    alert("Credenciales incorrectas. Por favor, intente de nuevo.");
                }
            }
        });
        
        [usernameInput, passwordInput].forEach(input => {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    loginButton.click();
                }
            });
        });
    } else {
        console.error('No se encontraron los elementos necesarios en el DOM');
    }
});

function validateCredentials(username, password) {
   
    
    return password.length >= 4;
    
}

