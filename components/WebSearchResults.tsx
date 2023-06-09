import Search from "@/models/Search";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButton from "./PaginationButton";

interface WebSearchResultsProps {
  searchData: Search;
}

const WebSearchResults = (props: WebSearchResultsProps) => {
  const { searchData } = props;
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-500 text-sm mb-5 mt-3">
        About {searchData.searchInformation?.formattedTotalResults} results (
        {searchData.searchInformation?.formattedSearchTime} seconds)
      </p>
      {searchData.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </Link>
            <Link
              href={result.link}
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <div className="">
        <PaginationButton />
      </div>
    </div>
  );
};

export default WebSearchResults;
