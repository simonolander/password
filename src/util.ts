

export const heartEmojis = "💌💘💝💖💗💓💞💕💟💔🧡💛💚💙💜🤎🖤🤍"
export const smileyEmojis = "😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😏😒🙄😬😮🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵🤯🤠🥳🥸😎🤓🧐😕🫤😟🙁😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿"
export const animalEmojis = "🐵🐒🦍🦧🐶🐕🦮🐩🐺🦊🦝🐱🐈🦁🐯🐅🐆🐴🐎🦄🦓🦌🦬🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿🦫🦔🦇🐻🐨🐼🦥🦦🦨🦘🦡🦃🐔🐓🐣🐤🐥🐦🐧🕊🦅🦆🦢🦉🦤🪶🦩🦚🦜🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦪🦭🐟🐠🐡🦈🐙🐚🪸🐌🦋🐛🐜🐝🪲🐞🦗🪳🕷🦂🦟🪰🪱🦀🦞🦐🦑"
export const foodEmojis = "🪺🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥🥑🍆🥔🥕🌽🌶🫑🥒🥬🥦🧄🧅🍄🥜🫘🌰🍞🥐🥖🫓🥨🥯🥞🧇🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🫔🥙🧆🥚🍳🥘🍲🫕🥣🥗🍿🧈🧂🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🥮🍡🥟🥠🥡🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🍬🍭🍮🍯🍼🥛☕🫖🍵🍶🍾🍷🍸🍹🍺🍻🥂🥃🫗🥤🧋🧃🧉🧊"
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

export const lowercase = "abcdefghijklmnopqrstuvwxyzåäö"
export const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"
export const digits = "0123456789"
export const specials = "\"!#€%&/()=?'^°§+´¨-_.:,;<>©¶@£$∞§|[]≈ ±~™–…‚≤•¡”¥¢‰\\{}≠¿`’·"
