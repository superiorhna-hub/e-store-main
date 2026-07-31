// Strips emoji and pictographic symbols from a string.
// \p{Extended_Pictographic} covers all visual emoji (emoticons, symbols,
// transport, flags, etc.) without false-positives on ASCII digits or letters.
export const stripEmoji = (str: string): string =>
  str.replace(/\p{Extended_Pictographic}/gu, "").trim()
