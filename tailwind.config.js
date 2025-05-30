// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         keyframes: {
//           fadeInUp: {
//             '0%': { opacity: '0', transform: 'translate3d(0, 30px, 0)' },
//             '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
//           }
//         },
//         animation: {
//           fadeInUp: 'fadeInUp 1s ease-out',
//         },
//       },
//     },
//     plugins: [],
//   }
  

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 30px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
      },
    },
  },
  plugins: [],
}