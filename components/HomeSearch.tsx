'use client';

import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

const HomeSearch = () => {

    const [input, setInput] = useState("");
    const router = useRouter();
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const response = await fetch("https://random-word-api.herokuapp.com/word");
        response.json().then(data => {
            setRandomSearchLoading(false);
            const searchTerm = data[0];
            router.push(`/search/web?searchTerm=${searchTerm}`);
        });
    }

    return (
        <>
            <form
                className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
                onSubmit={handleSubmit}
            >
                <AiOutlineSearch className="text-xl text-gray-500 mr-3 "/>
                <input type="text" className="flex-grow focus:outline-none" value={input}
                       onChange={(event) => setInput(event.target.value)}/>
                <BsFillMicFill className="text-xl"/>
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-8">
                <button className="btn" onClick={handleSubmit}>Google Search</button>
                <button className="btn flex items-center justify-center" onClick={randomSearch} disabled={randomSearchLoading}>{
                    randomSearchLoading ? (
                        <Image src='/loading.svg' alt="Loading Image" width={20} height={20}
                               className="text-center"/>) : "I'm Feeling Lucky"
                }</button>
            </div>
        </>
    )
}

export default HomeSearch;