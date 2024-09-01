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
  prefix: '/',
})

// Handle all routes by serving index.html
fastify.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

// Run the server!
try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
