import baseConfig from "../../eslint.config.mjs";

export default [
    ...baseConfig,
    {
        ignores: [
            ".next/**",
            ".next/*",
            "**/.next/**",
            "node_modules/**",
            "dist/**",
            "out/**"
        ]
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.js",
            "**/*.jsx"
        ],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-unused-vars": "warn"
        }
    }
];
