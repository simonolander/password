import {choose, chooseArray, emojis, heartEmojis, randomInt} from "./util";

function emoji(): string {
    return choose(heartEmojis)
}

function lowercase(): string {
    return choose("abcdefghijklmnopqrstuvwxyzåäö")
}

function uppercase(): string {
    return choose("ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ")
}

function digit(): string {
    return choose("0123456789")
}

function randomSymbol(): string {
    return chooseArray([digit, lowercase, uppercase, digit, lowercase, uppercase, emoji])();
}

export function generatePassword() {
    const numberOfCharacters = randomInt(4, 16)
    let password = ""
    for (let i = 0; i < numberOfCharacters; ++i) {
        password += randomSymbol()
    }
    return "password"
}
