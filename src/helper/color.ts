export type TColour = 'Reset' | 'Bright' | 'Dim' | 'Underscore' | 'Blink' | 'Reverse' | 'Hidden' | 'FgBlack' | 'FgRed' | 'FgGreen' | 'FgYellow' | 'FgBlue' | 'FgMagenta' | 'FgCyan' | 'FgWhite' | 'BgBlack' | 'BgRed' | 'BgGreen' | 'BgYellow' | 'BgBlue' | 'BgMagenta' | 'BgCyan' | 'BgWhite'

export const colourText = (colour: TColour, text: string): string => {
  const colours: Record<TColour, string> = {
    Reset: `\x1b[0m${text}\x1b[0m`,
    Bright: `\x1b[1m${text}\x1b[0m`,
    Dim: `\x1b[2m${text}\x1b[0m`,
    Underscore: `\x1b[4m${text}\x1b[0m`,
    Blink: `\x1b[5m${text}\x1b[0m`,
    Reverse: `\x1b[7m${text}\x1b[0m`,
    Hidden: `\x1b[8m${text}\x1b[0m`,

    FgBlack: `\x1b[30m${text}\x1b[0m`,
    FgRed: `\x1b[31m${text}\x1b[0m`,
    FgGreen: `\x1b[32m${text}\x1b[0m`,
    FgYellow: `\x1b[33m${text}\x1b[0m`,
    FgBlue: `\x1b[34m${text}\x1b[0m`,
    FgMagenta: `\x1b[35m${text}\x1b[0m`,
    FgCyan: `\x1b[36m${text}\x1b[0m`,
    FgWhite: `\x1b[37m${text}\x1b[0m`,

    BgBlack: `\x1b[40m${text}\x1b[0m`,
    BgRed: `\x1b[41m${text}\x1b[0m`,
    BgGreen: `\x1b[42m${text}\x1b[0m`,
    BgYellow: `\x1b[43m${text}\x1b[0m`,
    BgBlue: `\x1b[44m${text}\x1b[0m`,
    BgMagenta: `\x1b[45m${text}\x1b[0m`,
    BgCyan: `\x1b[46m${text}\x1b[0m`,
    BgWhite: `\x1b[47m${text}\x1b[0m`
  }
  return colours[colour]
}