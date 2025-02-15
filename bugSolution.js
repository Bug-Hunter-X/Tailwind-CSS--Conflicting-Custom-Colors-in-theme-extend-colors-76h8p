```javascript
// This is a Tailwind CSS configuration file.
module.exports = {
  purge: [], // Add your purge options here.
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-red': '#f00', // More descriptive and less prone to conflict
        'custom-blue': '#00f',
        'my-special-color': '#336699'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```