import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/js_guess_the_number/",
  server: {
    host: "0.0.0.0",
  },
});
