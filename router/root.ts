import { Handler } from "hono"
import { respOk } from "../helper"

export const health: Handler = (c) => {
  return c.json(respOk(null, 'Running'))
}
