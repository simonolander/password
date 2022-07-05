export type Predicate<T> = (t: T) => boolean

export function not<T>(predicate: Predicate<T>): Predicate<T> {
    return t => !predicate(t)
}
