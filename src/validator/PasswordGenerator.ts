import {choose, chooseArray, emojis, randomInt} from "./util";

function emoji(): string {
    return choose(emojis)
}

function lowercase(): string {
    return choose("abcdefghijklmnopqrstuvwxyzåäö")
}

function uppercase(): string {
    return choose("abcdefghijklmnopqrstuvwxyzåäö")
}

function digit(): string {
    return choose("0123456789")
}

function randomSymbol(): string {
    return chooseArray([digit, lowercase, uppercase, digit, lowercase, uppercase, emoji])();
}

export function generatePassword() {
    const numberOfCharacters = randomInt(4, 17)
    let password = ""
    for (let i = 0; i < numberOfCharacters; ++i) {
        password += randomSymbol()
    }
    return password
}
