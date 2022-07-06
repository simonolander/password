import {isDigit, isLowercase, isSpecial, isUppercase, none, some} from "../util";
import {US_STATES} from "./constant/states";

export interface PasswordRequirement {
    message: string
    validate: (password: string) => boolean
}

export const MinimumLength = function (length: number): PasswordRequirement {
    return {
        message: `Must be at least ${length} characters`,
        validate: password => password.length >= length
    }
}

export const MaximumLength = function (length: number): PasswordRequirement {
    return {
        message: `Must be at most ${length} characters`,
        validate: password => password.length <= length
    }
}

export const MustContainUppercase: PasswordRequirement = {
    message: `Must contain at least one uppercase character`,
    validate: some(isUppercase)
}

export const MustNotContainUppercase: PasswordRequirement = {
    message: `Must not contain any uppercase characters`,
    validate: none(isUppercase)
}

export const MustContainLowercase: PasswordRequirement = {
    message: `Must contain at least one lowercase character`,
    validate: some(isLowercase)
}

export const MustContainDigit: PasswordRequirement = {
    message: `Must contain at least one digit`,
    validate: some(isDigit)
}

export const MustContainSpecial: PasswordRequirement = {
    message: `Must contain at least one special character`,
    validate: some(isSpecial)
}

export const MustContainAmericanState: PasswordRequirement = {
    message: `Must contain at least one US state`,
    validate: password => US_STATES.some(state => password.toLowerCase().includes(state.toLowerCase()))
}

export const MustNotContainMackerel: PasswordRequirement = {
    message: `Must not contain any letter in the word mackerel`,
    validate: password => ![..."mackerel"].some(c => password.toLowerCase().includes(c))
}
