import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Asegura que las rutas relativas funcionen
  build: {
    minify: "terser", // Usa Terser para minimizar el código
    outDir: "dist", // Generar la salida en el directorio `dist`
    terserOptions: {
      compress: {
        drop_console: true, // Elimina console.logs
        drop_debugger: true, // Elimina debuggers
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    postcss: "./postcss.config.ts",
  },
});
