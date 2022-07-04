export interface Constraint {
    message: string
    validate: (string) => boolean
}

export const MinimumPasswordLength = function (length: number): Constraint {
    return {
        message: `Must be at least ${length} characters`,
        validate: password => password.length >= length
    }
}

export const MaximumPasswordLength = function (length: number): Constraint {
    return {
        message: `Must be at most ${length} characters`,
        validate: password => password.length <= length
    }
}
