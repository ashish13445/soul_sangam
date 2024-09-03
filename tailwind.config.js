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
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary : '#cdb4db',
                secondary: '#ffc8dd',
                blossomPink: '#ffafcc',
                extralightblue: '#bde0fe',
                lightblue: '#a2d2ff'
            }
        },
    },

    plugins: [forms],
};
