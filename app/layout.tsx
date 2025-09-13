import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: '∂Path Labs - Navigating Tomorrow',
  description: 'Advanced AI research lab specializing in autonomous navigation systems for drones, robots, and multi-agent systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize theme before React hydration
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', savedTheme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}