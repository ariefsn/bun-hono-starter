import { Handler } from "hono"

export const hello: Handler = (c) => {
  return c.body("Hello World")
}
