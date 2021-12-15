// https://api.tvmaze.com/search/shows?q=${searchInfo}
export type ApiBooksResults = {
    start: number;
    num_found: number;
    docs: ApiBook[]
}

export interface ApiBook {
    cover_i: number;
    has_fulltext: boolean;
    edition_count: number;
    title: string;
    author_name: string[];
    first_publish_year: 1954;
    key: string;
    ia: string[];
    author_key: string[];
    public_scan_b: boolean;
}
