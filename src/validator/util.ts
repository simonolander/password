export function length(string: String): number {
    // @ts-ignore
    return [...string].length
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}
