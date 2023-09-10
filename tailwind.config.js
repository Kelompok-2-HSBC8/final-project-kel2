/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["Poppins", "sans-serif"],
            },
            backgroundColor: {
                primary: "#00acee",
                secondary: "rgb(37 99 235)",
                hover: "rgb(243 244 246)",
            },
            textColor: {
                head: "black",
                subhead: "rgb(107, 114, 128)",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
