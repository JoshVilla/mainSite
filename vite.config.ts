import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add path to resolve aliases

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Add alias for '@'
    },
  },
});
