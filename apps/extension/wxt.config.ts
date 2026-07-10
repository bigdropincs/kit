import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  srcDir: "src",
  dev: {
    server: {
      port: 3001,
    },
  },
  manifest: {
    name: "Kit - AI Starter Kit",
    version: "0.1.0",
    description:
      "Chrome extension for Kit - your AI-native starter kit for building, launching, and scaling applications.",
    permissions: ["storage"],
    // Host permissions also exempt these sites from third-party cookie
    // blocking inside the popup iframe — keep in sync with where the app
    // is deployed
    host_permissions: [
      "http://localhost:3000/*",
      "http://localhost:5173/*",
      "https://*.vercel.app/*",
      "https://kit.bigdropincs.com/*",
    ],
  },
  vite: () => ({
    plugins: [react(), tailwindcss()],
  }),
});
