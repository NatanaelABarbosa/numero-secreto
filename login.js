const form = document.querySelector("form");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "natanael" && password == "1234") {
        window.location.href="home.html";
    } else {
        erro.textContent = "Usuário ou senha inválidos (coloque o texto transparente em cada parte)";
        erro.style.display = "block";
    }
});