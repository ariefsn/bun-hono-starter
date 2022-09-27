import { Hono } from "hono";
import { IEnv } from "../models";

export const methods = new Hono<IEnv>()

methods.use('*', async (c, next) => {
  console.log('before handler', process.env, process.env.PORT)
  await next()
  console.log('after handler', c.env.PORT, c.env)
})

methods.get('/', (c) => {
  return c.json({
    message: 'GET Method',
    env: c.env
  })
})

methods.post('/', async (c) => {
  const payload = await c.req.parseBody()
  return c.json(payload)
})

methods.put('/:id', (c) => {
  const { id } = c.req.param()
  return c.body("PUT Method. Params ID = " + id)
})

methods.delete('/:id', (c) => {
  return c.body("DELETE Method")
})