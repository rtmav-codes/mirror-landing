import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				display: ['Alibaba Sans'],
				body: ['Alibaba Sans']
			},
			textShadow: {
				DEFAULT: '0 2px 5px rgba(0, 0, 0, 0.5)',
				lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
			}
		}
	},

	plugins: [typography, forms, daisyui]
} satisfies Config;
