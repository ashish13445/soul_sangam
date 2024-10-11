import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary : '#F5A2B0',
                secondary: '#43C1BF',
                blossomPink: '#D70A5F',
                extralightblue: '#bde0fe',
                lightblue: '#a2d2ff'
            },
            backgroundImage: {
                'custom-radial': 'radial-gradient(circle, #43C1BF 60%, #205B5A 100%)',
                'primary-radial': 'radial-gradient(circle, #F5A2B0 60%, #D70A5F 100%)',

              },
        

        },
    },

    plugins: [forms],
};
