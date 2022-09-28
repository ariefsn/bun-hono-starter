import { Hono } from "hono";
import { logger } from '@middlewares'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import { health } from "./root";
import { example } from "./example";

export const router = new Hono()

router.use('*', logger())
router.use('*', prettyJSON())
router.use('*', cors())

router.get('/', health);
router.route('/example', example)