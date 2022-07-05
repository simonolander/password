import {PasswordValidator} from "./validator/PasswordValidator"
import {Level, Levels} from "./domain/Level";

const oldPasswordInput = document.getElementById("old-password") as HTMLInputElement
const newPasswordInput = document.getElementById("new-password") as HTMLInputElement
const passwordHint = document.getElementById("password-hint") as HTMLParagraphElement
const signInForm = document.getElementById("sign-in-form") as HTMLFormElement
const newGameButton = document.getElementById("new-game")
const victoryContent = document.getElementById("victory-content")
const passwordRevealed = document.getElementById("password-revealed") as HTMLParagraphElement
const passwordConstraints = document.getElementById("password-constraints")

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

function onFormSubmit(level: Level) {
    return function () {
        const password = newPasswordInput.value
        const success = level.validators.every(it => it.validate(password))
        for (const child of [...passwordConstraints.children]) {
            child.remove()
        }
        for (let validator of level.validators) {
            const li = document.createElement("li");
            li.textContent = validator.message
            if (validator.validate(password)) {
                li.className = "has-text-success has-text-weight-medium"
            } else {
                li.className = "has-text-danger has-text-weight-medium"
            }
            passwordConstraints.appendChild(li)
        }
        if (!success) {
            return false
        }
        victory(password)
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

    const level = Levels[0]
    for (const validator of level.validators) {
        const li = document.createElement("li");
        li.textContent = validator.message
        passwordConstraints.appendChild(li)
    }
    signInForm.onsubmit = onFormSubmit(level)
}

main()
