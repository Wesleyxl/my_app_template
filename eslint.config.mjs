import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Forçar tipagem explícita de retorno para funções e métodos
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false, // Não permite funções sem tipo explícito, mesmo em expressões
          allowTypedFunctionExpressions: true, // Permite funções com tipos já definidos
          allowHigherOrderFunctions: true, // Permite funções em HOFs sem erro
          allowDirectConstAssertionInArrowFunctions: true, // Permite retornos em arrow functions usando asserções diretas
        },
      ],
      // Evitar variáveis não utilizadas
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all", // Verifica todas as variáveis
          args: "after-used", // Permite argumentos não usados se estiverem no início
          ignoreRestSiblings: true, // Ignora o uso de rest siblings
        },
      ],

      // Ordenar automaticamente os imports e exports
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",

      // Desativar regras duplicadas do ESLint padrão
      "no-unused-vars": "off",
    },
  },
];
