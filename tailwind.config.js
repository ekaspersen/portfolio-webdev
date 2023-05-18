/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "e-primary": "#501346",
                "e-secondary": "#CFD224",
                "e-black": "#121212",
                "e-white": "#fff",
            },
            screens: {
                xs: "420px",
                md: "820px",
                "small-screen": "520px",
                mdbig: "1000px",
                "inner-screen": "1200px",
            },
        },
    },
    plugins: [],
};
