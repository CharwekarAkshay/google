import SearchResult from "@/models/SearchResult";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";
import Search from "@/models/Search";

interface SearchWebProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchWeb = async (props: SearchWebProps) => {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const { searchParams } = props;

  const searchTerm = searchParams["searchTerm"] as string;
  const startIndex = (searchParams["start"] as string) || 1;

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
  );


  if (!response.ok) throw Error(response.statusText);

  const data: Search = await response.json();

  const searchResults: Array<SearchResult> = data.items;

  if (!searchResults) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No result found</h1>
        <p className="text-xl">
          Try searching for something else or got back to home page to try again{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{searchResults && <WebSearchResults searchData={data} />}</div>;
};

export default SearchWeb;
