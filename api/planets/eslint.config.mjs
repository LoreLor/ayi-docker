import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "commonjs",
    globals: {
      ...globals.node,
      ...globals.browser
    }
  },
  plugins: [],
  extends: [
    js.configs.recommended
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
});
