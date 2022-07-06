import {
    PasswordRequirement,
    MaximumLength,
    MinimumLength,
    MustContainAmericanState,
    MustContainDigit,
    MustContainLowercase,
    MustContainSpecial,
    MustContainUppercase,
    MustNotContainMackerel,
    MustNotContainUppercase
} from "./PasswordRequirement";

export interface Level {
    levelId: string
    requirements: PasswordRequirement[]
}

export const mackerel: Level = {
    levelId: "mackerel",
    requirements: [
        MinimumLength(6),
        MustNotContainUppercase,
        MustContainAmericanState,
        MustNotContainMackerel,
    ]
}

export const basic: Level = {
    levelId: "basic",
    requirements: [
        MinimumLength(4),
        MaximumLength(8),
        MustContainUppercase,
        MustContainLowercase,
        MustContainDigit,
        MustContainSpecial,
    ]
}

export const Levels: Level[] = [
    basic,
    mackerel,
]
