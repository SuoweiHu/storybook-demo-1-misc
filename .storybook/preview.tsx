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
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    },

     initialGlobals: {
        viewport: { value: 'desktop'},
    },
};

export default preview;