document.getElementById("login-button").addEventListener("click", () => {  
    let token = localStorage.getItem('token')
    console.log(token)
    token 
    ? window.open("./views/home.html", "_self")
    : window.open("./views/loginForm.html", "_self")
});
