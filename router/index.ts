import { Hono } from "hono";
import { hello } from "./hello";
import { methods } from "./methods";

export const router = new Hono()

router.get('/', hello);
router.route('/methods', methods)