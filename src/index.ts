const usernameInput = document.getElementById("username") as HTMLInputElement
const passwordInput = document.getElementById("password") as HTMLInputElement
const passwordHint = document.getElementById("password-hint") as HTMLParagraphElement

async function setUsername() {
    const username = "Alfons"
    usernameInput.value = username
    return username
}

function onPasswordChange() {
    passwordInput.classList.remove("is-danger")
}

function onFormSubmit(): false {
    passwordInput.classList.add("is-danger")
    return false
}

async function main() {
    const username = await setUsername()
}

main().catch(console.error)
