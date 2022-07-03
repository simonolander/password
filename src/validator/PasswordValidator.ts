import emojiRegex from "emoji-regex"
import {length} from "./util";

export type PasswordValidator = (password: string) => string | undefined

const cannotBeEmpty = function (correctPassword: string): PasswordValidator {
    return function (password: string): string {
        if (password === "" && correctPassword !== "") {
            return "Password must not be empty"
        }
    }
}

const minimumLength = function (correctPassword: string) {
    const minimumSize = Math.floor(length(correctPassword) / 4) * 4
    return function (password: string): string {
        if (length(password) < minimumSize) {
            return `Password must be at least ${minimumSize} characters long`
        }
    }
}

const maximumLength = function (correctPassword: string) {
    const maximumSize = Math.floor(length(correctPassword) / 4 + 1) * 4
    return function (password: string): string {
        if (length(password) > maximumSize) {
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

const mustContainLowercase = function (correctPassword: string) {
    const regex = /[a-zåäö]/
    return function (password: string): string {
        if (regex.test(correctPassword) && !regex.test(password)) {
            return `Password must contain at least one lowercase character`
        }
    }
}

const mustContainUppercase = function (correctPassword: string) {
    const regex = /[A-ZÅÄÖ]/
    return function (password: string): string {
        if (regex.test(correctPassword) && !regex.test(password)) {
            return `Password must contain at least one uppercase character`
        }
    }
}

const mustContainScandinavian = function (correctPassword: string) {
    const regex = /[åäöÅÄÖæÆøØ]/
    return function (password: string): string {
        if (regex.test(correctPassword) && !regex.test(password)) {
            return `Password must contain at least one Scandinavian character å, ä, æ, ö, ø`
        }
    }
}

const cannotContainDanish = function (correctPassword: string) {
    const regex = /[øØæÆ]/
    return function (password: string): string {
        if (!regex.test(correctPassword) && regex.test(password)) {
            return `Password must not contain Danish characters æ, ø`
        }
    }
}

const mustContainEmoji = function (correctPassword: string) {
    const regex = emojiRegex()
    return function (password: string): string {
        if (regex.test(correctPassword) && !regex.test(password)) {
            return `Password must contain at least one emoji 👆`
        }
    }
}

const vowelsAndConsonants = function (correctPassword: string) {
    const vowels = /[aeiouyåäö]/i
    const consonants = /[bcdfghjklmnpqrstvwxz]/i
    const correctPasswordVowels = vowels.exec(correctPassword).length
    const correctPasswordConsonants = consonants.exec(correctPassword).length
    return function (password: string): string {
        const passwordVowels = vowels.exec(password).length
        const passwordConsonants = consonants.exec(password).length
        if (correctPasswordVowels === correctPasswordConsonants) {
            if (passwordVowels !== passwordConsonants) {
                return "Password must contain the same number of vowels and consonants"
            }
        }
        else if (correctPasswordVowels > correctPasswordConsonants) {
            if (passwordVowels <= passwordConsonants) {
                return "Password must contain more vowels than consonants"
            }
        }
        else {
            if (passwordVowels >= passwordConsonants) {
                return "Password must not contain more vowels than consonants"
            }
        }
    }
}

export function generateValidators(username: string, password: string): PasswordValidator[] {
    return [
        cannotBeEmpty(password),
        minimumLength(password),
        maximumLength(password),
        mustContainDigit(password),
        mustContainLowercase(password),
        mustContainUppercase(password),
        mustContainScandinavian(password),
        cannotContainDanish(password),
        mustContainEmoji(password),
        vowelsAndConsonants(password),
    ]
}
