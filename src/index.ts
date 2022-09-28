import { env } from "process"
import { colourText } from "./helper"
import { router } from "./router"

const port = parseInt(env.PORT ?? '4000')

console.log("\n", colourText("FgCyan", "Server started on port: " + port), "\n")

Bun.serve({
  port,
  fetch: router.fetch,
})
