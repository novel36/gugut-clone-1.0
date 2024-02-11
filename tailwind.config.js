/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		
		extend: {
			backgroundColor: {
				'gugut-bg': 'rgb(30 30 30)',
        
			},
      screens:{
        mmd:'900px'
      },
      backgroundImage: {
        'gugut-gradient': 'linear-gradient(90deg, #1e1e1e 0%, rgba(30,30,30,0) 100%)',
        'gugut-gradient-2': 'linear-gradient(to bottom, rgba(30,30,30,.95) 35%, rgba(30,30,30,.3) 70%)',
        'gugut-gradient-3': 'linear-gradient(180deg, rgba(41,41,41,.5) 0%, #1e1e1e 100%)',
    
     
      },
      boxShadow: {
        'hero-shadow': '0 0 629.748px #f59b23,0 0 359.856px #f59b23,0 0 209.916px #f59b23,0 0 104.958px #f59b23,0 0 29.988px #f59b23,0 0 14.994px #f59b23',
      },
      gradientColorStops:{
        'primary-500':"#f0901b",
        'secondary-500':'#1b9df0',
        'hero-btn-bg': '#f08f1a',
        'hero-btn-bg-2': '#ff6b00',
      },
      colors:{
        "gugut-text": "rgb(245 155 35)",
        "secondary":{
          500:"rgb(27 157 240)"
        },
      }
		}
	},
	plugins: []
};
