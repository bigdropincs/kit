import baseConfig from "@bigdropincs/eslint-config/base";
import nextjsConfig from "@bigdropincs/eslint-config/nextjs";
import reactConfig from "@bigdropincs/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
