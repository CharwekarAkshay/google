'use client';
import {AiOutlineCamera, AiOutlineSearch} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const SearchHeaderOptions = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();


    const isWeb = pathname == "/search/web";
    const isImage = pathname == "/search/image";
    const searchTerm = searchParams.get("searchTerm");

    const handleTabChange = (tab: string) => {
        if (tab == "web" && isImage) {
            router.push(`/search/web?searchTerm=${searchTerm}`);
        } else if (tab == "image" && isWeb) {
            router.push(`/search/image?searchTerm=${searchTerm}`);
        }
    }

    return (
        <div className="flex space-x-2 select-none border-b w-full justify-center sm:justify-start lg:pl-52 text-gray-700 text-sm">
            <div
                className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${isWeb && '!text-blue-600 !border-blue-600'}`}
                onClick={() => handleTabChange("web")}
            >
                <AiOutlineSearch className="text-md"/>
                <p>All</p>
            </div>
            <div
                className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${isImage && '!text-blue-600 !border-blue-600'}`}
                onClick={() => handleTabChange("image")}
            >
                <AiOutlineCamera className="text-md"/>
                <p>Images</p>
            </div>
        </div>
    )
}

export default SearchHeaderOptions