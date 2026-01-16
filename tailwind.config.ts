// tailwind.config.ts
import type { Config } from "next";

const config: Config = {
  // ... resto da config
  plugins: [
    require("@tailwindcss/typography"), // Adicione esta linha
  ],
};
export default config;
