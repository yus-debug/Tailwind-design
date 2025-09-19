import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true, // This allows external access (needed for ngrok)
    strictPort: true, // Exit if port 8080 is not available
    allowedHosts: ['a81e6c54d5dc.ngrok-free.app'], // Allow ngrok host
  },
})
