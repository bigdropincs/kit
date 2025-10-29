import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@bigdropincs/eslint-config/base";
import { reactConfig } from "@bigdropincs/eslint-config/react";

export default defineConfig(
  {
    ignores: [".nitro/**", ".output/**", ".tanstack/**"],
  },
  baseConfig,
  reactConfig,
  restrictEnvAccess,
);
