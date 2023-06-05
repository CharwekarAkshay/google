import './globals.css'
import {Inter} from 'next/font/google'
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Google  Clone Next.js',
    description: 'Generated with love with next.js',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} relative min-h-screen`}>
            {children}
            <Footer/>
        </body>
        </html>
    )
}
