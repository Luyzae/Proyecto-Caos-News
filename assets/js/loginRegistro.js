function registrarUsuario() {
    var email = document.getElementById("reg-email").value;
    var name = document.getElementById("reg-name").value;
    var password = document.getElementById("reg-password").value;

    if (email.length == 0 || name.length == 0 || password.length == 0) {
        alert("Rellena todas las casillas");
        return;
    }

    var newUser = { 
        email: email, 
        name: name, 
        password: password, 
    };
    
    var users = JSON.parse(localStorage.getItem("usuarios")) || [];
    users.push(newUser);

    localStorage.setItem("usuarios", JSON.stringify(users));

    alert("Registro exitoso");

    window.location.href = "login.html";
}

function iniciarSesion() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    var users = JSON.parse(localStorage.getItem("usuarios")) || [];

    var user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Inicio de Sesion con exito");
        localStorage.setItem("isLoggedIn", true); 
        window.location.href = "index.html"; 
    } else {
        alert("Correo o contraseña incorrecto");
    }
}

function cerrarSesion() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('usuarioLogueado'); 
    alert('Sesión cerrada exitosamente');
    window.location.href = 'index.html'; 
}
