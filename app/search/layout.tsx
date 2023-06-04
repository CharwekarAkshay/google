import '../globals.css'
import {Inter} from 'next/font/google'
import SearchHeaders from "@/components/SearchHeaders";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Google  Clone Next.js',
    description: 'Generated with love with next.js',
}

const SearchLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <SearchHeaders/>
            {children}
        </>
    )
}

export default SearchLayout;