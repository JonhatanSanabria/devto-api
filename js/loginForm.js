let logInBtn = document.getElementById("login-button")
logInBtn.addEventListener("click", () => {
    let fields = document.querySelectorAll("#login-form input")
    let userObject = {}
    fields.forEach((field) => {
        let property = field.name
        let value = field.value
        userObject[property] = value
    })
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    localStorage.setItem("token", token)
    window.open("../views/home.html", "_self")
})