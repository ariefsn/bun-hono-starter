import { Hono } from "hono";
import { health } from "./root";
import { example } from "./example";

export const router = new Hono()

router.get('/', health);
router.route('/example', example)