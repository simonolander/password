import {array, constant, Decoder, object, string, taggedUnion} from "decoders";

export interface CompletedLevel {
    levelId: string
    solution: string
}

export interface Progress {
    completedLevels: CompletedLevel[]
}

interface CompletedLevelDto {
    toDomain: () => CompletedLevel
}

class CompletedLevelDtoV1 implements CompletedLevelDto {
    constructor(private levelId: string, private solution: string) {
    }

    toDomain(): CompletedLevel {
        return {
            levelId: this.levelId,
            solution: this.solution,
        }
    }
}

const completedLevelV1Decoder: Decoder<CompletedLevel> = object({
    version: constant("1"),
    levelId: string,
    solution: string,
}).transform(it => new CompletedLevelDtoV1(it.levelId, it.solution))

interface ProgressDtoV1 {
    version: "1"
    completedLevels: CompletedLevelDtoV1[]
}

const progressDtoV1Decoder: Decoder<Progress> = object({
    version: constant("1"),
    completedLevels: array(completedLevelDtoV1Decoder)
})

const progressDecoder: Decoder<Progress> = taggedUnion("version", {"1": progressDtoV1Decoder})

export function loadProgress(): Progress | null {
    try {
        const json = localStorage.getItem("progress")
        if (json === null) {
            return null
        }
        let object = JSON.parse(json)
        if (object.hasOwnProperty("version")) {
            if (object.version === "1") {
                return
            }
        }
    } catch (e) {
        console.warn("Could not parse progress in local storage", e)
        return null
    }
}
