import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: { // Configuración para Vitest
    globals: true, // Habilita las API globales como describe, it, expect
    environment: "jsdom", // Configura el entorno jsdom para pruebas DOM
    setupFiles: "./src/setupTests.js", // Archivo de configuración inicial
  },
});
