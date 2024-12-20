export default {
    extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss", "stylelint-config-clean-order"],
    overrides: [
        {
            files: ["*.vue", "**/*.vue"],
            extends: [
                "stylelint-config-standard-scss",
                "stylelint-config-standard-vue/scss",
                "stylelint-config-clean-order",
            ],
        },
    ],
    rules: {
        "selector-class-pattern": null,
    },
};
