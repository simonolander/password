import {generateValidators, PasswordValidator} from "./validator/PasswordValidator"
import {generatePassword} from "./validator/PasswordGenerator";

const oldPasswordInput = document.getElementById("old-password") as HTMLInputElement
const newPasswordInput = document.getElementById("new-password") as HTMLInputElement
const passwordHint = document.getElementById("password-hint") as HTMLParagraphElement
const signInForm = document.getElementById("sign-in-form") as HTMLFormElement
const newGameButton = document.getElementById("new-game")
const victoryContent = document.getElementById("victory-content")
const passwordRevealed = document.getElementById("password-revealed") as HTMLParagraphElement

function setOldPassword() {
    const username = "hi there"
    oldPasswordInput.value = username
    return username
}

newPasswordInput.oninput = function onPasswordChange() {
    newPasswordInput.classList.remove("is-danger")
    passwordHint.textContent = ""
}

function validatePassword(validators: PasswordValidator[], password: string): string | undefined {
    for (const validator of validators) {
        const validation = validator(password)
        if (validation) {
            return validation
        }
    }
}

function victory(password: string) {
    passwordRevealed.textContent = password
    signInForm.classList.add("is-hidden")
    victoryContent.classList.remove("is-hidden")
}

function onFormSubmit(validators: PasswordValidator[]) {
    return function () {
        const password = newPasswordInput.value
        const validation = validatePassword(validators, password)
        if (validation) {
            passwordHint.textContent = validation
            newPasswordInput.classList.add("is-danger")
        } else {
            victory(password)
        }
        return false
    }
}

/**
 * Launches the application
 */
function main() {
    newGameButton.onclick = function () {
        document.location.reload()
    }

    const correctPassword = generatePassword()
    document.getElementById("debug").textContent = correctPassword
    const validators = generateValidators("username", correctPassword)
    signInForm.onsubmit = onFormSubmit(validators)
}

main()
