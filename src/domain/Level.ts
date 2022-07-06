import {
    Constraint,
    MaximumLength,
    MinimumLength,
    MustContainAmericanState,
    MustContainDigit,
    MustContainLowercase,
    MustContainSpecial,
    MustContainUppercase,
    MustNotContainMackerel,
    MustNotContainUppercase
} from "./Constraint";

export interface Level {
    levelId: string
    validators: Constraint[]
}

export const mackerel: Level = {
    levelId: "mackerel",
    validators: [
        MinimumLength(6),
        MustNotContainUppercase,
        MustContainAmericanState,
        MustNotContainMackerel,
    ]
}

export const basic: Level = {
    levelId: "basic",
    validators: [
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
