function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // akun dummy
    if (user === "admin" && pass === "admin123") {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Login gagal!";
    }
}
