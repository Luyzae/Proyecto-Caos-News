document.addEventListener("DOMContentLoaded", function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    var loginStatus = document.getElementById("loginEstado"); 

    if (isLoggedIn === "true") {
        loginStatus.style.backgroundColor = "green"; // Usuario logueado
    } else {
        loginStatus.style.backgroundColor = "red"; // Usuario no logueado
    }
});
