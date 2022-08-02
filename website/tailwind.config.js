/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'main': {
                    'body': "var(--body--)",
                    "shadow": "var(--shadow--)",
                },
                'salon': {
                    "bar": "var(--salon--bar--)",
                    "text-light": "var(--salon--text--light--)",
                    "text-dark": "var(--salon--text--dark--)",
                },
                'landing': {
                    "bar": "var(--landing--bar--)",
                    "text-light": "var(--landing--text--light--)",
                    "text-dark": "var(--landing--text--dark--)",
                },
            },
            borderRadius: {
                'main': '16px',
            }
        },
    },
    plugins: [],
}