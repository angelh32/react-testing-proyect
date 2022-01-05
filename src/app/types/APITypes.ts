// https://api.tvmaze.com/search/shows?q=${searchInfo}
export type ApiBooksResults = {
    start: number;
    num_found: number;
    num_found_exact?: boolean,
    numFoundExact?: boolean,
    docs: ApiBook[]
    numFound: number;
    q: string;
    offset: number | null
}

export interface ApiBook {
    cover_i?: number;
    has_fulltext?: boolean;
    edition_count?: number;
    title?: string;
    author_name?: string[];
    first_publish_year?: number;
    key: string;
    ia?: string[];
    type: string;
    seed: string[]
    edition_key: string[];
    isbn: string[];
    publish_date: string[];
    publish_year: number[];
    number_of_pages_median?: number;
    last_modified_i: number;
    ebook_count_i: number;
    cover_edition_key?: string;
    publisher?: string[];
    language?: string[];
    id_amazon?: string[];
    subject?: string[];
    publisher_facet?: string[];
    subject_facet?: string[];
    _version_?: number;
    author_facet?: string[];
    subject_key?: string[];
    title_suggest?: string;
    author_key?: string[];
    lccn?: string[];
    publish_place?: string[];
    oclc?: string[];
    lcc?: string[];
    ddc?: string[];
    ia_collection_s?: string;
    contributor?: string[];
    public_scan_b?: boolean;
    lending_edition_s?: string;
    lending_identifier_s?: string;
    printdisabled_s?: string;
    id_depósito_legal?: string[];
    id_goodreads?: string[];
    id_librarything?: string[];
    ia_loaded_id?: string[];
    ia_box_id?: string[];
    lcc_sort?: string;
    ddc_sort?: string;
    subtitle?: string;
    first_sentence?: string[];
    author_alternative_name?: string[];
}
