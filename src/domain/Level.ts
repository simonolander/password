import {
    Constraint,
    MaximumPasswordLength,
    MinimumLength, MustContainAmericanState,
    MustContainDigit,
    MustContainLowercase,
    MustContainUppercase, MustNotContainMackerel, MustNotContainUppercase
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

export const Levels: Level[] = [
    mackerel
]
