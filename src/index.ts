const usernameInput = document.getElementById("username") as HTMLInputElement
const passwordInput = document.getElementById("password") as HTMLInputElement
const passwordHint = document.getElementById("password-hint") as HTMLParagraphElement

function setUsername() {
    const username = "Alfons"
    usernameInput.value = username
    return username
}

function onPasswordChange() {
    passwordInput.classList.remove("is-danger")
    passwordHint.textContent = ""
}

function validatePassword(password: string): string {
    return ""
}

function onFormSubmit(): false {
    const password = passwordInput.value
    const validation = validatePassword(password)
    if (validation) {
        passwordHint.textContent = validation
        passwordInput.classList.add("is-danger")
    }
    else {

    }
    return false
}

function main() {
    const username = setUsername()
    const password = "passw0rd"
}

main()
