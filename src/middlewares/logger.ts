import { MiddlewareHandler } from 'hono/dist/hono'
import dayjs from 'dayjs'
import { colourText } from '@/helper'

enum LogPrefix {
  Outgoing = '<--',
  Incoming = '-->'
}

const colorByStatus = (status: number, message?: string) => {
  const out: { [key: string]: string } = {
    7: `\x1b[35m${message ?? status}\x1b[0m`,
    5: `\x1b[31m${message ?? status}\x1b[0m`,
    4: `\x1b[33m${message ?? status}\x1b[0m`,
    3: `\x1b[36m${message ?? status}\x1b[0m`,
    2: `\x1b[32m${message ?? status}\x1b[0m`,
    1: `\x1b[32m${message ?? status}\x1b[0m`,
    0: `\x1b[33m${message ?? status}\x1b[0m`,
  }

  const calculateStatus = (status / 100) | 0

  return out[calculateStatus]
}

export const logger = (): MiddlewareHandler => {
  return async (c, next) => {
    const { method, url } = c.req
    const fullUrl = new URL(url)
    const startTime = dayjs()
    const timeTemplate = 'YYYY-MM-DD HH:mm:ss.SSS'

    const details = [
      `[${method}]`,
      `${fullUrl.pathname}`
    ]

    // log before handler
    console.log(LogPrefix.Incoming, colourText('FgMagenta', startTime.format(timeTemplate)), details.join('  '))

    await next()
    const endTime = dayjs()
    const delta = endTime.diff(startTime) + 'ms'
    const status = c.res.status
    details.push(
      `${colorByStatus(status)}`,
      `${delta}`
    )

    // log after handler
    console.log(colorByStatus(status, LogPrefix.Outgoing), colourText('FgMagenta', endTime.format(timeTemplate)), details.join('  '))
  }
}