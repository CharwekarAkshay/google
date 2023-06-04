import Link from "next/link";
import Image from "next/image";
import SearchBoxComponent from "@/components/SearchBoxComponent";
import {RiSettings3Line} from "react-icons/ri";
import {TbGridDots} from "react-icons/tb";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";

const SearchHeaders = () => {
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center justify-between">
                <Link href={'/'}>
                    <Image src='/google_logo.png' alt="Google log" width={120} height={40} className="cursor-pointer"/>
                </Link>
                <div className="flex-1">
                    <SearchBoxComponent/>
                </div>
                <div className="hidden md:inline-flex space-x-2">
                    <RiSettings3Line className="header-icon"/>
                    <TbGridDots className="header-icon"/>
                </div>
                <button
                    className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 shadow-md transition-all duration-200 ml-2">Sign
                    In
                </button>
            </div>
            <SearchHeaderOptions/>
        </header>
    );
};

export default SearchHeaders;