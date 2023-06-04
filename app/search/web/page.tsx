import SearchResult from "@/models/SearchResult";

interface SearchWebProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const SearchWeb = async (props: SearchWebProps) => {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const CONTEXT_KEY = process.env.CONTEXT_KEY;
    const {searchParams} = props;


    const searchTerm = searchParams['searchTerm'] as string;

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`);

    const data = await response.json();

    const searchResults: Array<SearchResult> = data.items;

    console.log(searchResults);

    return (
        <div>
            {
                searchResults && searchResults.map((searchResult) => (
                    <div key={searchResult.title}>
                        {searchResult.title}
                    </div>
                ))
            }
        </div>
    );
};

export default SearchWeb;