import { env } from "process"
import { router } from "./router"

Bun.serve({
  port: env.PORT,
  fetch: router.fetch
})
