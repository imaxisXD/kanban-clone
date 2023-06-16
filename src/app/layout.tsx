import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kanban Clone',
  description: 'kanban Clone created by Abhishek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar />
      <div className={inter.className}>{children}</div>
    </html>
  )
}
