import './bootstrap'; // Assuming this file handles initial setup like Axios, etc.
import '../css/app.css'; // Your custom CSS
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import PrimeVue from 'primevue/config';
import aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/en-US';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Create Inertia App
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: aura,
                },
            })
            .use(Quasar, {
                plugins: {}, // Import Quasar plugins and add here if needed
                lang: quasarLang,
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
