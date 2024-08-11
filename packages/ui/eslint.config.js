import baseConfig from "@bigdropincs/eslint-config/base";
import reactConfig from "@bigdropincs/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
