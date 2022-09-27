import { env } from "process"
import { router } from "./router"

Bun.serve({
  port: parseInt(env.PORT ?? '4000'),
  fetch: router.fetch
})
