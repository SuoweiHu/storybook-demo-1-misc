import type { Preview } from '@storybook/nextjs-vite'
import { MINIMAL_VIEWPORTS  } from 'storybook/viewport';
import '../app/globals.css'

const preview: Preview = {
    parameters: {
        // Viewports for responsive design testing
        viewport: {
            options: MINIMAL_VIEWPORTS ,
        },

        // Controls for interactive component testing
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        // Accessibility testing configuration
        a11y: {
            // How to handle accessibility violations in Storybook (wether to fail CI/CD or not)
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',

            // Rulesets to run: https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react&ref=guide#rulesets
            options: {
                /*
                * Opt in to running WCAG 2.x AAA rules
                * Note that you must explicitly re-specify the defaults (all but the last array entry)
                * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter-examples for more details
                */
                runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice', 'wcag2aaa'],
            },
        }
    },

     initialGlobals: {
        viewport: { value: 'desktop'},
    },
};

export default preview;