import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "Delete Facebook Messages",
    version: "1.0",
    description:
      "A browser extension to delete and archive Facebook messages in bulk.",

    permissions: ["storage", "scripting", "activeTab"],
    content_scripts: [
      {
        matches: ["<all_urls>"],
        js: ["./content-scripts/content.js"],
      },
    ],
  },
});
