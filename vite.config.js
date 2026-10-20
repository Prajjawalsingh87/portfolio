import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serves the Vercel functions in /api during `npm run dev` and `npm run preview`,
// so the live GitHub and Medium sections work locally too.
function vercelApi() {
  const routes = { '/api/github': 'api/github.js', '/api/medium': 'api/medium.js' }
  let root = process.cwd()
  const middleware = async (req, res, next) => {
    const file = routes[req.url.split('?')[0]]
    if (!file) return next()
    try {
      const { default: handler } = await import(pathToFileURL(resolve(root, file)).href)
      await handler(req, res)
    } catch (error) {
      next(error)
    }
  }
  return {
    name: 'vercel-api',
    configResolved(config) {
      root = config.root
    },
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vercelApi(),
  ],
})
