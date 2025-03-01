import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { zfd } from "zod-form-data";

const app = new Hono();

const formDataSchema = zfd.formData({
  file: zfd.file(),
});

app.post("/", zValidator("json", formDataSchema), async (c) => {
  console.log(c);
});

export { app as uploadRoute };
