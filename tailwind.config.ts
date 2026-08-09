import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { espresso: "#22140f", roast: "#492819", cream: "#f8f2e9", gold: "#d39b4a", moss: "#344536" }, fontFamily: { display: ["Georgia", "serif"] }, boxShadow: { warm: "0 20px 60px rgba(34,20,15,.18)" } } }, plugins: [] };
export default config;
