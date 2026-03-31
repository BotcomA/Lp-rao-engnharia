import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite acesso externo (ngrok)
    allowedHosts: true, // libera qualquer host (ideal pra ngrok)
  },
});
