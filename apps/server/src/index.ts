import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { uploadRoute } from './routes/upload.js'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/upload',uploadRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
