import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'tall': { 'raw': '(max-height: 880px)' },
        'custom-lg': '510px',
        'custom-lg1': '565px',
        'custom-xl': '640px',
        'custom-xl0': '730px',

        'custom-xl3': '765px',
        'custom-xl4': '1080px',

        'custom-xl2': '930px',
        
      },
      colors: {
         //'orange-custom': '#cb4d36', 
       // 'orange-custom': '#FC964E', 
        'orange-custom': '#ff937b',
        // 'bluecs':'#662E1D',// Define your custom color here
        'bluecs':'#ff937b',
        // 'lim':'#a3e635',
        // 'lim':'#CDC1F6',
        // // 'lim':'#ECB1B8',
        // 'lim':'#FA97A1',
        'lim':'#161716',
        'pink':'rgb(255, 91, 219)',
        'green':'rgb(9,13,3)',
        'hov2':'#4b5563',
        'hhov':'#4b5563',
        'cart':'#0c0b0b'

      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
  corePlugins: {
    // other core plugins
    placeholderColor: false, // disable the default placeholder color utility
  },
}
export default config
