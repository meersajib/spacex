import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}", // Add your file paths here
    "node_modules/flowbite/**/*.js", // Make sure Flowbite's components are included
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          "3xl": "1920px",
        },
      },
      colors: {
        primary: {
          100: "#E1EFFE",
          700: "#1A56DB",
          800: "#1E429F",
        },
        green: {
          default: "#31c48d",
          100: "#DEF7EC",
          800: "#03543F",
        },
        red: {
          100: "#FDE8E8",
          800: "#9B1C1C",
        },
        blue: {
          default: "#1C64F2",
        },
        gray: {
          default: "#E5E7EB",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          400: "#565e6c",
          500: "#6B7280",
          800: "#1F2A37",
          900: "#111928",
        },
      },
    },
  },
  plugins: [flowbitePlugin],
};
