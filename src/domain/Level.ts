import {Constraint, MinimumPasswordLength} from "./Constraint";

export interface Level {
    levelId: string
    validators: Constraint[]
}

export const Levels: Level[] = [
    {
        levelId: "1",
        validators: [
            MinimumPasswordLength(8)
        ]
    }
]
