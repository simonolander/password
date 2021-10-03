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

export function generateValidators(username: string, password: string): PasswordValidator[] {
    return [
        cannotBeEmpty(password),
        minimumLength(password),
    ]
}
