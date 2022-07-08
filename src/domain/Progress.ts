export interface CompletedLevel {
    levelId: string
    solution: string
}

export interface Progress {
    completedLevels: CompletedLevel[]
}

interface CompletedLevelDtoV1 {
    version: "1"
    levelId: string
    solution: string
}

interface ProgressDtoV1 {
    version: "1"
    completedLevels: CompletedLevelDtoV1[]
}

export function loadProgress(): Progress | undefined {
    try {
        const json = localStorage.getItem("progress");
        if (json === null) {
            return undefined
        }
        let object = JSON.parse(json);
        if (object.hasOwnProperty("version")) {
            if (object.version === "1") {
                return
            }
        }
    }
    catch (e) {
        console.warn("Could not parse progress in local storage", e)
        return undefined
    }
}
