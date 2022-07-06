import {isDigit, isLowercase, isSpecial, isUppercase, none, some} from "../util";
import {US_STATES} from "./constant/states";

export interface Constraint {
    message: string
    validate: (password: string) => boolean
}

export const MinimumLength = function (length: number): Constraint {
    return {
        message: `Must be at least ${length} characters`,
        validate: password => password.length >= length
    }
}

export const MaximumLength = function (length: number): Constraint {
    return {
        message: `Must be at most ${length} characters`,
        validate: password => password.length <= length
    }
}

export const MustContainUppercase: Constraint = {
    message: `Must contain at least one uppercase character`,
    validate: some(isUppercase)
}

export const MustNotContainUppercase: Constraint = {
    message: `Must not contain any uppercase characters`,
    validate: none(isUppercase)
}

export const MustContainLowercase: Constraint = {
    message: `Must contain at least one lowercase character`,
    validate: some(isLowercase)
}

export const MustContainDigit: Constraint = {
    message: `Must contain at least one digit`,
    validate: some(isDigit)
}

export const MustContainSpecial: Constraint = {
    message: `Must contain at least one special character`,
    validate: some(isSpecial)
}

export const MustContainAmericanState: Constraint = {
    message: `Must contain at least one US state`,
    validate: password => US_STATES.some(state => password.toLowerCase().includes(state.toLowerCase()))
}

export const MustNotContainMackerel: Constraint = {
    message: `Must not contain any letter in the word mackerel`,
    validate: password => ![..."mackerel"].some(c => password.toLowerCase().includes(c))
}
