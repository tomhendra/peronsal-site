import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fastify = Fastify({
  logger: true
})

// Serve static files from the 'dist' directory
await fastify.register(fastifyStatic, {
  root: join(__dirname, 'dist'),
  prefix: '/'
})

// Handle all routes by serving index.html (for SPA)
fastify.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

// Run the server!
const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '3000', 10)
    const host = process.env.HOST || '0.0.0.0'

    await fastify.listen({ port, host })
    console.log(`Server is now listening on ${fastify.server.address()}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
