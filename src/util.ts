

export const heartEmojis = "๐๐๐๐๐๐๐๐๐๐๐งก๐๐๐๐๐ค๐ค๐ค"
export const smileyEmojis = "๐๐๐๐๐๐คฃ๐๐๐๐ซ ๐๐๐๐ฅฐ๐๐คฉ๐๐๐๐๐ฅฒ๐๐๐๐คช๐๐ค๐ค๐คญ๐ซข๐ซฃ๐คซ๐ค๐ซก๐ค๐คจ๐๐๐ถ๐ซฅ๐๐๐๐ฌ๐ฎ๐คฅ๐๐๐ช๐คค๐ด๐ท๐ค๐ค๐คข๐คฎ๐คง๐ฅต๐ฅถ๐ฅด๐ต๐คฏ๐ค ๐ฅณ๐ฅธ๐๐ค๐ง๐๐ซค๐๐๐ฏ๐ฒ๐ณ๐ฅบ๐ฅน๐ฆ๐ง๐จ๐ฐ๐ฅ๐ข๐ญ๐ฑ๐๐ฃ๐๐๐ฉ๐ซ๐ฅฑ๐ค๐ก๐ ๐คฌ๐๐ฟ"
export const animalEmojis = "๐ต๐๐ฆ๐ฆง๐ถ๐๐ฆฎ๐ฉ๐บ๐ฆ๐ฆ๐ฑ๐๐ฆ๐ฏ๐๐๐ด๐๐ฆ๐ฆ๐ฆ๐ฆฌ๐ฎ๐๐๐๐ท๐๐๐ฝ๐๐๐๐ช๐ซ๐ฆ๐ฆ๐๐ฆฃ๐ฆ๐ฆ๐ญ๐๐๐น๐ฐ๐๐ฟ๐ฆซ๐ฆ๐ฆ๐ป๐จ๐ผ๐ฆฅ๐ฆฆ๐ฆจ๐ฆ๐ฆก๐ฆ๐๐๐ฃ๐ค๐ฅ๐ฆ๐ง๐๐ฆ๐ฆ๐ฆข๐ฆ๐ฆค๐ชถ๐ฆฉ๐ฆ๐ฆ๐ธ๐๐ข๐ฆ๐๐ฒ๐๐ฆ๐ฆ๐ณ๐๐ฌ๐ฆช๐ฆญ๐๐ ๐ก๐ฆ๐๐๐ชธ๐๐ฆ๐๐๐๐ชฒ๐๐ฆ๐ชณ๐ท๐ฆ๐ฆ๐ชฐ๐ชฑ๐ฆ๐ฆ๐ฆ๐ฆ"
export const foodEmojis = "๐ชบ๐๐๐๐๐๐๐๐ฅญ๐๐๐๐๐๐๐ซ๐ฅ๐๐ซ๐ฅฅ๐ฅ๐๐ฅ๐ฅ๐ฝ๐ถ๐ซ๐ฅ๐ฅฌ๐ฅฆ๐ง๐ง๐๐ฅ๐ซ๐ฐ๐๐ฅ๐ฅ๐ซ๐ฅจ๐ฅฏ๐ฅ๐ง๐ง๐๐๐ฅฉ๐ฅ๐๐๐๐ญ๐ฅช๐ฎ๐ฏ๐ซ๐ฅ๐ง๐ฅ๐ณ๐ฅ๐ฒ๐ซ๐ฅฃ๐ฅ๐ฟ๐ง๐ง๐ฅซ๐ฑ๐๐๐๐๐๐๐ ๐ข๐ฃ๐ค๐ฅ๐ฅฎ๐ก๐ฅ๐ฅ ๐ฅก๐ฆ๐ง๐จ๐ฉ๐ช๐๐ฐ๐ง๐ฅง๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ผ๐ฅโ๐ซ๐ต๐ถ๐พ๐ท๐ธ๐น๐บ๐ป๐ฅ๐ฅ๐ซ๐ฅค๐ง๐ง๐ง๐ง"
export const emojis = heartEmojis + smileyEmojis + animalEmojis + foodEmojis

export function symbols(string: string): string[] {
    // @ts-ignore
    return [...string]
}

export function length(string: string): number {
    return symbols(string).length
}

/**
 * @param min inclusive
 * @param max exclusive
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}

export function chooseArray<T>(array: T[]): T {
    return array[randomInt(0, array.length)]
}

export function choose(string: string): string {
    // @ts-ignore
    return chooseArray(symbols(string))
}

export function containsAny(needles: string): (string: string) => boolean {
    const set = new Set(needles)
    return function (haystack: string): boolean {
        return [...haystack].some(h => set.has(h));
    }
}

export function isDigit(character: string): boolean {
    return [...digits].some(it => it == character)
}

export function isUppercase(character: string): boolean {
    return character.toLowerCase() !== character
}

export function isLowercase(character: string): boolean {
    return character.toUpperCase() !== character
}

export function isSpecial(character: string): boolean {
    return !isUppercase(character) && !isLowercase(character) && !isDigit(character);
}

export const some = predicate => (password: string) => [...password].some(predicate)
export const none = predicate => (password: string) => ![...password].some(predicate)

export const lowercase = "abcdefghijklmnopqrstuvwxyzรฅรครถ"
export const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZรรร"
export const digits = "0123456789"
export const specials = "\"!#โฌ%&/()=?'^ยฐยง+ยดยจ-_.:,;<>ยฉยถ@ยฃ$โยง|[]โ ยฑ~โขโโฆโโคโขยกโยฅยขโฐ\\{}โ ยฟ`โยท"
