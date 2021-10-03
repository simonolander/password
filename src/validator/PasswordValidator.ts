export type PasswordValidator = (password: string) => string | undefined

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}

const cannotBeEmpty = function (correctPassword: string): PasswordValidator {
    return function (password: string): string {
        if (password === "" && correctPassword !== "") {
            return "Password must not be empty"
        }
    }
}

const minimumLength = function (correctPassword: string) {
    const minimumSize = randomInt(0, correctPassword.length + 1)
    return function (password: string): string {
        if (password.length < minimumSize) {
            return `Password must be at least ${minimumSize} characters long`
        }
    }
}

const maximumLength = function (correctPassword: string) {
    const maximumSize = randomInt(correctPassword.length, correctPassword.length * 2 + 1)
    return function (password: string): string {
        if (password.length > maximumSize) {
            return `Password must be at most ${maximumSize} characters long`
        }
    }
}

const mustContainDigit = function (correctPassword: string) {
    const regex = /[0-9]/
    return function (password: string): string {
        if (regex.test(correctPassword) && !regex.test(password)) {
            return `Password must contain at least one digit`
        }
    }
}

export function generateValidators(username: string, password: string): PasswordValidator[] {
    return [
        cannotBeEmpty(password),
        minimumLength(password),
        maximumLength(password),
        mustContainDigit(password),
    ]
}
