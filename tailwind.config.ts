
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom forest colors
				forest: {
					50: '#F2FCE2',
					100: '#E6EDD6',
					200: '#D0DEBD',
					300: '#BACFA4',
					400: '#91AD70',
					500: '#5D7944',
					600: '#4A632B',
					700: '#3C4F28',
					800: '#2E3C20',
					900: '#202918',
				},
				moss: {
					50: '#F3F7E2',
					100: '#E8EFC9',
					200: '#D0DFA3',
					300: '#B9CF7D',
					400: '#A1BE57',
					500: '#7A9234',
					600: '#5F7328',
					700: '#445415',
					800: '#29350C',
					900: '#0F1603',
				},
				bark: {
					50: '#F5F0E8',
					100: '#E8DFD1',
					200: '#D2C3A9',
					300: '#BCA781',
					400: '#A68C59',
					500: '#8A7349',
					600: '#715D3B',
					700: '#58482D',
					800: '#3F331F',
					900: '#251E10',
				},
				earth: {
					50: '#F5F0EB',
					100: '#ECE2D7',
					200: '#D9C5AF',
					300: '#C6A887',
					400: '#B38B5F',
					500: '#9A7042',
					600: '#836036',
					700: '#6C502D',
					800: '#543F23',
					900: '#3C2E1A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)' 
					},
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-20px)' 
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)' 
					},
				},
				'drone-float': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
					'100%': { transform: 'translateY(0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-slow': 'fade-in 1.2s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'drone-float': 'drone-float 5s infinite ease-in-out',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
