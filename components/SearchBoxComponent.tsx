'use client';

import {RxCross2} from "react-icons/rx";
import {BsFillMicFill} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useState} from "react";

const SearchBoxComponent = () => {
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || "");
    const router = useRouter();


    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    const handleCrossClick = () => {
        setTerm("");
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!term) return;
        router.push(`/search/web?searchTerm=${term}`);
    }

    return (
        <form
            className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
            onSubmit={handleSubmit}
        >
            <input type="text" className="w-full  focus:outline-none" value={term} onChange={handleSearchChange}/>
            <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={handleCrossClick}/>
            <BsFillMicFill
                className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3"/>
            <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
                             onClick={handleSubmit}/>
        </form>
    );
}

export default SearchBoxComponent