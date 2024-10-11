import './bootstrap.js'; // Assuming this file handles initial setup like Axios, etc.
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
import geolocationPlugin from '../js/geolocationPlugin';
import Tooltip from 'primevue/tooltip';
import AOS from 'aos';

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import 'aos/dist/aos.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Create Inertia App
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import Echo from "laravel-echo";
import Pusher from 'pusher-js';

window.Pusher = Pusher;
const pusherKey = import.meta.env.VITE_PUSHER_APP_KEY;
const pusherCluster = import.meta.env.VITE_PUSHER_APP_CLUSTER;

// Check if environment variables are available
console.log('Pusher Key:', pusherKey);
console.log('Pusher Cluster:', pusherCluster);


// Initialize Laravel Echo with Pusher
const echo = new Echo({
  broadcaster: 'pusher',
  key: pusherKey,
  cluster: pusherCluster,
  forceTLS: true,
});

// Listen for messages
echo.private('chat')
  .listen('MessageSent', (e) => {
    messages.value.push({ user: e.user, text: e.message });
  });  
  
  import { createPinia } from 'pinia';
const pinia = createPinia();
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, { theme: { preset: aura } })
            .use(Quasar, { plugins: {}, lang: quasarLang })
            .use(ToastService)
            .use(pinia);
            app.directive('tooltip',Tooltip);
            AOS.init();
            app.mount(el);
    },
    
    progress: {
        color: '#4B5563',
    },
});
