import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["98b7-2804-e4c-3e40-1c7-17-6526-7ca0-2c6c.ngrok-free.app"],
  },
});
