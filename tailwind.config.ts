import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		backgroundImage: {
		  'button-bg': 'var(--button-bg)',
		  'sidebarMenu-bg': 'var(--sidebar-selected-menu-bg)',
		  'siderbar-blur': 'var(--sidebar-blur)',
		},
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        text: 'hsl(var(--text))',
        input: 'hsl(var(--input))',
        mainBg: 'var(--main-bg)',
        contentBg: 'var(--content-bg)',
        popupBg: 'var(--popup-bg)',
        title: 'var(--title)',
        inputBorder: 'var(--input-border)',
        cardBg: 'var(--card-bg)',
        dropdownBg: 'var(--dropdown-bg)',
        innerCardBg: 'var(--inner-card-bg)',
        cardHover: 'var(--card-hover)',
        cardNumbers: 'var(--card-numbers)',
        cardTitle: 'var(--card-title)',
        cardIcon: 'var(--card-icon)',
        cardIconBg: 'var(--card-icon-bg)',
        grayTableRow: 'var(--gray-table-row)',
        whiteTableRow: 'var(--white-table-row)',
		sidebarMenu: {
			text: 'hsl(var(--sidebar-selected-menu-text))',
		},
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
