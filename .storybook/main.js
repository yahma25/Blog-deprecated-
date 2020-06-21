const path = require('path');

/**
 * react: https://storybook.js.org/docs/guides/guide-react/
 * ts: https://storybook.js.org/docs/configurations/typescript-config/
 * addon
 * - https://github.com/storybookjs/storybook/tree/master/addons/actions
 * - https://github.com/storybookjs/storybook/tree/master/addons/knobs
 */
module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                { loader: require.resolve('ts-loader') },
                { loader: require.resolve('react-docgen-typescript-loader'),
                    options: {
                        // Provide the path to your tsconfig.json so that your stories can
                        // display types from outside each individual story.
                        tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                    },
                }
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};

