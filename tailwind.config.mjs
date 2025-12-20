// tailwind.config.mjs
// Use an empty object for default exports in ESM syntax.

export default {
    // 1. Content: Essential for Tailwind to know which files to scan
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  
    // 2. Theme: Add your custom colors and typography here
    theme: {
      extend: {
        // --- Custom Colors (Color Themes) ---
        colors: {
          'primary': '#31C3B8',
          'secondary': '#9ACD34',
        

        },
  
        // --- Custom Fonts (Typography) ---
        fontFamily: {
          // Use your Next/Font CSS variables here
          heading: ['var(--font-raleway)', 'sans-serif'],
          sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
  
    // 3. Plugins: Only include plugins you have successfully installed
    plugins: [
      // This is the typography plugin you confirmed was installed
      require('@tailwindcss/typography'), 
    ],
  };