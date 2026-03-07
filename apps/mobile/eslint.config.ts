import { baseConfig } from "@bigdropincs/eslint-config/base";
import { reactConfig } from "@bigdropincs/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);
