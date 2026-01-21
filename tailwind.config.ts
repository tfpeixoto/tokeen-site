// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... resto da config
  plugins: [
    require("@tailwindcss/typography"), // Adicione esta linha
  ],
};
export default config;
