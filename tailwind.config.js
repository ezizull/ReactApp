module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        fontFamily: {
            title: ['"Product Sans"'],
            sans: ['"Open Sans"'],
        },

        extend: {
            boxShadow: {
                "xl-center": "0px 4px 12px rgba(0 0 0 / 0.1)",
            },
            strokeWidth: {
                0.1: "0.1px",
                0.5: "0.5px",
            },
            height: {
                102: "28rem",
                108: "30rem",
                "17/20": "85%",
                "9/10": "90%",
            },
            width: {
                102: "28rem",
                108: "30rem",
                "17/20": "85%",
                "9/10": "90%",
            },
            animation: {
                "ping-slow": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
            },
            keyframes: {
                ping: {
                    "75%, 100%": {
                        transform: "scale(1.5)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animation-delay")],
};
