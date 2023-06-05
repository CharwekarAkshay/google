import SearchResult from "@/models/SearchResult";
import SearchInformation from "@/models/SearchInformation";

type Search = {
    kind: string;
    url: {
        type: string;
        template: string;
    };
    queries: {
        request: Array<SearchQuery>;
        nextPage: Array<SearchQuery>;
    };
    context: {
        title: string;
    };
    searchInformation: SearchInformation;
    items: Array<SearchResult>;
};


type SearchQuery = {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;

}
export default Search;