import { Hono } from "hono";

export const example = new Hono()

example.use('*', async (c, next) => {
  console.log('before handler')
  await next()
  console.log('after handler')
})

example.get('/', (c) => {
  return c.json({
    message: 'GET Method',
    env: c.env
  })
})

example.post('/', async (c) => {
  const payload = await c.req.parseBody()
  return c.json(payload)
})

example.put('/:id', (c) => {
  const { id } = c.req.param()
  return c.body("PUT Method. Params ID = " + id)
})

example.delete('/:id', (c) => {
  return c.body("DELETE Method")
})