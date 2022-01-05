import Axios from "axios"
import { ApiBook, ApiBooksResults } from "../types/APITypes"
import { Book } from "../types/types"

export const removeHtmlTag = (rawText: string) => {
    return rawText.replace(new RegExp(/\<[\/bip]+\>/, 'g'), "")
}

export function apiToBooks(rawData: ApiBooksResults): Book[] {
    const shows: Book[] = rawData.docs.map((item: ApiBook) => {
        return {
            name: item.title,
            key: item.key,
            authors: item.author_name
        }
    })
    return shows
}

export function setZeros(data: number) {
    const base = "00" + data
    return base.substring(base.length - 2)
}

export const callApi = (url: string) => {
    return Axios.get<ApiBooksResults>(url)
}

export const callApiBook = (searchInfo: string) => {
    const searchFormat = searchInfo.toLowerCase().replace(new RegExp(" ", 'g'), "-");
    // return callApi(`http://openlibrary.org/search.json?q=${searchFormat}&page=1`)
    //     .then(resJson => resJson.data)
    return Promise.resolve(mockData)
        .then(resJson => apiToBooks(resJson))
}

const mockData: ApiBooksResults= {
    "numFound": 15,
    "start": 0,
    "numFoundExact": true,
    "docs": [
        {
            "key": "/works/OL17427759W",
            "type": "work",
            "seed": [
                "/books/OL30532091M",
                "/books/OL26010711M",
                "/books/OL27004602M",
                "/books/OL29600138M",
                "/books/OL27513328M",
                "/books/OL28224924M",
                "/works/OL17427759W",
                "/subjects/fiction_fantasy_general",
                "/authors/OL1394865A"
            ],
            "title": "Mistborn Trilogy",
            "title_suggest": "Mistborn Trilogy",
            "has_fulltext": false,
            "edition_count": 6,
            "edition_key": [
                "OL30532091M",
                "OL26010711M",
                "OL27004602M",
                "OL29600138M",
                "OL27513328M",
                "OL28224924M"
            ],
            "publish_date": [
                "Sep 01, 2015",
                "Oct 01, 2001",
                "Mar 31, 2020",
                "2009",
                "2011",
                "Dec 01, 2011"
            ],
            "publish_year": [
                2020,
                2015,
                2009,
                2001,
                2011
            ],
            "first_publish_year": 2001,
            "number_of_pages_median": 1712,
            "isbn": [
                "147321369X",
                "9781473213692",
                "9780765381521",
                "1429989815",
                "9780575118560",
                "0575118563",
                "9781250267177",
                "125026717X",
                "9780765365439",
                "0765381524",
                "076536543X",
                "9781429989817"
            ],
            "last_modified_i": 1633780620,
            "ebook_count_i": 0,
            "cover_edition_key": "OL29600138M",
            "cover_i": 7557846,
            "publisher": [
                "Doherty Associates, LLC, Tom",
                "Gollancz",
                "Tor Books",
                "imusti",
                "Tor Fantasy",
                "Tor Teen",
                "GOLLANCZ"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "subject": [
                "Fiction, fantasy, general"
            ],
            "id_amazon": [
                "0765381524"
            ],
            "publisher_facet": [
                "Doherty Associates, LLC, Tom",
                "GOLLANCZ",
                "Gollancz",
                "Tor Books",
                "Tor Fantasy",
                "Tor Teen",
                "imusti"
            ],
            "subject_facet": [
                "Fiction, fantasy, general"
            ],
            "_version_": 1718394918431359000,
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "fiction_fantasy_general"
            ]
        },
        {
            "key": "/works/OL24289089W",
            "type": "work",
            "seed": [
                "/books/OL32129622M",
                "/works/OL24289089W",
                "/authors/OL1394865A",
                "/authors/OL3026933A",
                "/authors/OL3070558A",
                "/authors/OL7740348A"
            ],
            "title": "Mistborn Adventure Game",
            "title_suggest": "Mistborn Adventure Game",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL32129622M"
            ],
            "publish_date": [
                "Jul 01, 2012"
            ],
            "publish_year": [
                2012
            ],
            "first_publish_year": 2012,
            "number_of_pages_median": 584,
            "isbn": [
                "0982684398",
                "9780982684399"
            ],
            "last_modified_i": 1623228561,
            "ebook_count_i": 0,
            "cover_edition_key": "OL32129622M",
            "cover_i": 10791869,
            "publisher": [
                "Crafty Games"
            ],
            "author_key": [
                "OL1394865A",
                "OL3026933A",
                "OL3070558A",
                "OL7740348A"
            ],
            "author_name": [
                "Brandon Sanderson",
                "Alex Flagg",
                "Patrick Kapera",
                "Crafty Games"
            ],
            "author_alternative_name": [
                "brandon sanderson",
                "Brandon Sanderson (author)",
                "Sanderson  Brandon",
                "SANDERSON BRANDON",
                "BRANDON SANDERSON"
            ],
            "publisher_facet": [
                "Crafty Games"
            ],
            "_version_": 1715088001730609200,
            "author_facet": [
                "OL1394865A Brandon Sanderson",
                "OL3026933A Alex Flagg",
                "OL3070558A Patrick Kapera",
                "OL7740348A Crafty Games"
            ]
        },
        {
            "key": "/works/OL19913857W",
            "type": "work",
            "seed": [
                "/books/OL27098446M",
                "/works/OL19913857W",
                "/subjects/fiction_fantasy_general",
                "/authors/OL1394865A"
            ],
            "title": "Mistborn: Secret History",
            "title_suggest": "Mistborn: Secret History",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL27098446M"
            ],
            "publish_date": [
                "Jul 09, 2019"
            ],
            "publish_year": [
                2019
            ],
            "first_publish_year": 2019,
            "lcc": [
                "PS-3619.00000000.A533"
            ],
            "isbn": [
                "1473225043",
                "9781473225046"
            ],
            "last_modified_i": 1632190338,
            "ebook_count_i": 0,
            "cover_edition_key": "OL27098446M",
            "cover_i": 8737946,
            "publisher": [
                "gollancz uk"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "subject": [
                "Fiction, fantasy, general"
            ],
            "publisher_facet": [
                "gollancz uk"
            ],
            "subject_facet": [
                "Fiction, fantasy, general"
            ],
            "_version_": 1718394918438699000,
            "lcc_sort": "PS-3619.00000000.A533",
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "fiction_fantasy_general"
            ]
        },
        {
            "key": "/works/OL5738148W",
            "type": "work",
            "seed": [
                "/books/OL26156063M",
                "/books/OL27279908M",
                "/books/OL8053528M",
                "/books/OL3418158M",
                "/books/OL24945060M",
                "/books/OL8054112M",
                "/books/OL28684446M",
                "/books/OL28155920M",
                "/books/OL33980107M",
                "/books/OL27117591M",
                "/books/OL32047482M",
                "/books/OL30922876M",
                "/books/OL27959083M",
                "/books/OL27513437M",
                "/books/OL35625507M",
                "/books/OL28866183M",
                "/books/OL27098447M",
                "/books/OL28761377M",
                "/books/OL27314368M",
                "/books/OL32600208M",
                "/books/OL29791801M",
                "/books/OL34155923M",
                "/works/OL5738148W",
                "/subjects/courts_and_courtiers",
                "/subjects/women_revolutionaries",
                "/subjects/fiction",
                "/subjects/fiction_fantasy_general",
                "/subjects/fantasy",
                "/subjects/adventure",
                "/subjects/magic",
                "/subjects/thieves",
                "/subjects/nobility",
                "/subjects/covert_operations",
                "/subjects/mystical_powers",
                "/subjects/upraising",
                "/subjects/fiction_fantasy_epic",
                "/authors/OL1394865A"
            ],
            "title": "The Final Empire (Mistborn, Book 1)",
            "title_suggest": "The Final Empire (Mistborn, Book 1)",
            "has_fulltext": true,
            "edition_count": 22,
            "edition_key": [
                "OL26156063M",
                "OL27279908M",
                "OL8053528M",
                "OL3418158M",
                "OL24945060M",
                "OL8054112M",
                "OL28684446M",
                "OL28155920M",
                "OL33980107M",
                "OL27117591M",
                "OL32047482M",
                "OL30922876M",
                "OL27959083M",
                "OL27513437M",
                "OL35625507M",
                "OL28866183M",
                "OL27098447M",
                "OL28761377M",
                "OL27314368M",
                "OL32600208M",
                "OL29791801M",
                "OL34155923M"
            ],
            "publish_date": [
                "July 25, 2006",
                "Aug 24, 2001",
                "July 31, 2007",
                "Mar 17, 2010",
                "2020",
                "Dec 01, 2013",
                "Jul 09, 2016",
                "2006",
                "2016",
                "Sep 24, 2019",
                "2021",
                "2007",
                "May 01, 2012",
                "2018",
                "Sep 21, 2016",
                "Aug 12, 2009",
                "May 13, 2014",
                "2010",
                "Sep 29, 2015"
            ],
            "publish_year": [
                2020,
                2010,
                2012,
                2013,
                2006,
                2009,
                2016,
                2001,
                2021,
                2015,
                2007,
                2019,
                2018,
                2014
            ],
            "first_publish_year": 2001,
            "number_of_pages_median": 671,
            "lccn": [
                "2005034496"
            ],
            "publish_place": [
                "New York",
                "Taibei Shi",
                "Barcelona (España)"
            ],
            "oclc": [
                "690986679",
                "170855115"
            ],
            "contributor": [
                "Duan, Zongchen"
            ],
            "lcc": [
                "PS-3619.00000000.A533 M57 2007",
                "PS-3619.00000000.A533 M57 2006",
                "PS-3619.00000000.A533",
                "PS-3619.00000000.A533M57 2006"
            ],
            "ddc": [
                "813.6"
            ],
            "isbn": [
                "0575089911",
                "9781250318541",
                "9781473216815",
                "9780765360960",
                "1473216818",
                "9789866712982",
                "9781427275103",
                "1427227950",
                "236051010X",
                "8413143195",
                "9782360510108",
                "0765377136",
                "8466659943",
                "8466658890",
                "9780765350381",
                "1250318548",
                "9788417347291",
                "0765350386",
                "9781427227959",
                "076531178X",
                "9780575089914",
                "9781628510218",
                "1938570138",
                "9781429914567",
                "9788413143194",
                "9788466658898",
                "9781938570131",
                "9780765311788",
                "0765360969",
                "1427275106",
                "9788466659949",
                "9780765377135",
                "8417347291",
                "1628510218",
                "8498726131",
                "9866712982",
                "9788498726138",
                "1429914564"
            ],
            "last_modified_i": 1638567989,
            "ebook_count_i": 4,
            "ia": [
                "isbn_9780765360960_0",
                "mistbornfinalemp00sand",
                "finalempiremistb00sand",
                "mistbornfinalemp0000sand"
            ],
            "public_scan_b": false,
            "ia_collection_s": "americana;inlibrary;china;internetarchivebooks;librarygenesis;printdisabled;delawarecountydistrictlibrary",
            "lending_edition_s": "OL3418158M",
            "lending_identifier_s": "mistbornfinalemp0000sand",
            "printdisabled_s": "OL3418158M;OL24945060M;OL8053528M;OL26156063M",
            "cover_edition_key": "OL3418158M",
            "cover_i": 524535,
            "publisher": [
                "Qi huan ji di chu ban",
                "Tor",
                "Doherty Associates, LLC, Tom",
                "Dragonsteel Entertainment, LLC",
                "Nova",
                "Gollancz",
                "Tor Books",
                "Macmillan Audio",
                "Ediciones B",
                "Tor Fantasy",
                "imusti",
                "ORBIT",
                "Cheng bang wen hua shi ye gu fen you xian gong si",
                "Tor Teen",
                "Ediciones B, S.A.",
                "GraphicAudio",
                "Ediciones B Mexico"
            ],
            "language": [
                "eng",
                "chi",
                "spa"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "subject": [
                "Courts and courtiers",
                "Women revolutionaries",
                "Fiction",
                "Fiction, fantasy, general",
                "Fantasy",
                "Adventure",
                "Magic",
                "Thieves",
                "Nobility",
                "Covert Operations",
                "Mystical powers",
                "Upraising",
                "Fiction, fantasy, epic",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_amazon": [
                "1473216818",
                "1427275106",
                "1250318548"
            ],
            "id_depósito_legal": [
                "B-2859-2018"
            ],
            "id_goodreads": [
                "68428",
                "243272"
            ],
            "id_librarything": [
                "1287660"
            ],
            "ia_loaded_id": [
                "mistbornfinalemp00sand"
            ],
            "ia_box_id": [
                "IA1158211",
                "IA125614",
                "IA40065213"
            ],
            "publisher_facet": [
                "Cheng bang wen hua shi ye gu fen you xian gong si",
                "Doherty Associates, LLC, Tom",
                "Dragonsteel Entertainment, LLC",
                "Ediciones B",
                "Ediciones B Mexico",
                "Ediciones B, S.A.",
                "Gollancz",
                "GraphicAudio",
                "Macmillan Audio",
                "Nova",
                "ORBIT",
                "Qi huan ji di chu ban",
                "Tor",
                "Tor Books",
                "Tor Fantasy",
                "Tor Teen",
                "imusti"
            ],
            "subject_facet": [
                "Accessible book",
                "Adventure",
                "Courts and courtiers",
                "Covert Operations",
                "Fantasy",
                "Fiction",
                "Fiction, fantasy, epic",
                "Fiction, fantasy, general",
                "Magic",
                "Mystical powers",
                "Nobility",
                "Protected DAISY",
                "Thieves",
                "Upraising",
                "Women revolutionaries"
            ],
            "_version_": 1718394918439747600,
            "lcc_sort": "PS-3619.00000000.A533 M57 2007",
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "accessible_book",
                "adventure",
                "courts_and_courtiers",
                "covert_operations",
                "fantasy",
                "fiction",
                "fiction_fantasy_epic",
                "fiction_fantasy_general",
                "magic",
                "mystical_powers",
                "nobility",
                "protected_daisy",
                "thieves",
                "upraising",
                "women_revolutionaries"
            ],
            "ddc_sort": "813.6"
        },
        {
            "key": "/works/OL17349393W",
            "type": "work",
            "seed": [
                "/books/OL32326415M",
                "/books/OL27513649M",
                "/books/OL25926785M",
                "/books/OL26718146M",
                "/books/OL28809251M",
                "/books/OL26783634M",
                "/books/OL35624327M",
                "/works/OL17349393W",
                "/subjects/magic",
                "/subjects/fiction",
                "/subjects/religious_disputations",
                "/subjects/domestic_terrorism",
                "/subjects/imaginary_places",
                "/subjects/fiction_/_fantasy_/_epic",
                "/subjects/fiction_fantasy_general",
                "/subjects/fiction_fantasy_epic",
                "/subjects/imaginary_places_fiction",
                "/subjects/nyt:hardcover-fiction=2015-10-25",
                "/subjects/new_york_times_bestseller",
                "/authors/OL1394865A",
                "/authors/OL6901651A"
            ],
            "title": "Shadows of Self (Mistborn, Book 5)",
            "title_suggest": "Shadows of Self (Mistborn, Book 5)",
            "has_fulltext": true,
            "edition_count": 7,
            "edition_key": [
                "OL32326415M",
                "OL27513649M",
                "OL25926785M",
                "OL26718146M",
                "OL28809251M",
                "OL26783634M",
                "OL35624327M"
            ],
            "publish_date": [
                "Oct 06, 2016",
                "Oct 06, 2015",
                "Oct 01, 2021",
                "2016",
                "October 6th 2015"
            ],
            "publish_year": [
                2015,
                2016,
                2021
            ],
            "first_publish_year": 2015,
            "number_of_pages_median": 448,
            "lccn": [
                "2015028839"
            ],
            "lcc": [
                "PS-3619.00000000.A533",
                "PS-3619.00000000.A533 S53 2015"
            ],
            "isbn": [
                "9780765378569",
                "0765378566",
                "9788466658850",
                "9781427262233",
                "0765386879",
                "1473208238",
                "9781473208230",
                "1427262233",
                "9788490708293",
                "9780765386878",
                "8490708290",
                "8466658858",
                "0765378558",
                "9780765378552"
            ],
            "last_modified_i": 1638568450,
            "ebook_count_i": 1,
            "ia": [
                "shadowsofselfmis0000sand"
            ],
            "public_scan_b": false,
            "ia_collection_s": "printdisabled;inlibrary;internetarchivebooks",
            "lending_edition_s": "OL25926785M",
            "lending_identifier_s": "shadowsofselfmis0000sand",
            "printdisabled_s": "OL25926785M",
            "cover_edition_key": "OL25926785M",
            "cover_i": 7427757,
            "publisher": [
                "Doherty Associates, LLC, Tom",
                "Nova",
                "Tor Books",
                "Macmillan Audio",
                "GOLLANCZ",
                "B de Bolsillo (Ediciones B)"
            ],
            "language": [
                "spa",
                "eng"
            ],
            "author_key": [
                "OL1394865A",
                "OL6901651A"
            ],
            "author_name": [
                "Brandon Sanderson",
                "Michael Kramer"
            ],
            "subject": [
                "Magic",
                "Fiction",
                "Religious disputations",
                "Domestic terrorism",
                "Imaginary places",
                "FICTION / Fantasy / Epic",
                "Fiction, fantasy, general",
                "Fiction, fantasy, epic",
                "Imaginary places, fiction",
                "nyt:hardcover-fiction=2015-10-25",
                "New York Times bestseller",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_amazon": [
                "1427262233"
            ],
            "id_goodreads": [
                "16065004"
            ],
            "ia_box_id": [
                "IA40257302"
            ],
            "publisher_facet": [
                "B de Bolsillo (Ediciones B)",
                "Doherty Associates, LLC, Tom",
                "GOLLANCZ",
                "Macmillan Audio",
                "Nova",
                "Tor Books"
            ],
            "subject_facet": [
                "Accessible book",
                "Domestic terrorism",
                "FICTION / Fantasy / Epic",
                "Fiction",
                "Fiction, fantasy, epic",
                "Fiction, fantasy, general",
                "Imaginary places",
                "Imaginary places, fiction",
                "Magic",
                "New York Times bestseller",
                "Protected DAISY",
                "Religious disputations",
                "nyt:hardcover-fiction=2015-10-25"
            ],
            "_version_": 1718394918419824600,
            "lcc_sort": "PS-3619.00000000.A533 S53 2015",
            "author_facet": [
                "OL1394865A Brandon Sanderson",
                "OL6901651A Michael Kramer"
            ],
            "subject_key": [
                "accessible_book",
                "domestic_terrorism",
                "fiction",
                "fiction__fantasy__epic",
                "fiction_fantasy_epic",
                "fiction_fantasy_general",
                "imaginary_places",
                "imaginary_places_fiction",
                "magic",
                "new_york_times_bestseller",
                "nythardcover-fiction2015-10-25",
                "protected_daisy",
                "religious_disputations"
            ]
        },
        {
            "key": "/works/OL16597059W",
            "type": "work",
            "seed": [
                "/books/OL27098434M",
                "/books/OL27098432M",
                "/books/OL27010614M",
                "/books/OL26797423M",
                "/books/OL25280450M",
                "/books/OL28015028M",
                "/books/OL27654468M",
                "/books/OL34058774M",
                "/books/OL28868795M",
                "/works/OL16597059W",
                "/subjects/imaginary_places",
                "/subjects/magic",
                "/subjects/fiction",
                "/subjects/fantasy",
                "/subjects/fiction_fantasy_epic",
                "/subjects/nyt:hardcover-fiction=2011-11-27",
                "/subjects/new_york_times_bestseller",
                "/authors/OL1394865A"
            ],
            "title": "The Alloy of Law (Mistborn, Book 4)",
            "title_suggest": "The Alloy of Law (Mistborn, Book 4)",
            "has_fulltext": true,
            "edition_count": 9,
            "edition_key": [
                "OL27098434M",
                "OL27098432M",
                "OL27010614M",
                "OL26797423M",
                "OL25280450M",
                "OL28015028M",
                "OL27654468M",
                "OL34058774M",
                "OL28868795M"
            ],
            "publish_date": [
                "Jan 05, 2016",
                "Jul 09, 2001",
                "Sep 06, 2011",
                "2017",
                "Oct 30, 2012",
                "Nov 01, 2011",
                "2011"
            ],
            "publish_year": [
                2012,
                2016,
                2001,
                2017,
                2011
            ],
            "first_publish_year": 2001,
            "number_of_pages_median": 352,
            "lccn": [
                "2011021578"
            ],
            "publish_place": [
                "New York"
            ],
            "oclc": [
                "707969381"
            ],
            "lcc": [
                "PS-3619.00000000.A533A79 2011",
                "PS-3619.00000000.A533 A79 2011",
                "PS-3619.00000000.A533"
            ],
            "ddc": [
                "813.6"
            ],
            "isbn": [
                "0765394790",
                "9780765394798",
                "0575105836",
                "0765368544",
                "9781429965989",
                "9781427214584",
                "0575105801",
                "9780575105805",
                "9780575105836",
                "1429965983",
                "9780765368546",
                "9780765330420",
                "8466658920",
                "0765330423",
                "9788466658928",
                "9780575105829",
                "1427214581",
                "0575105828"
            ],
            "last_modified_i": 1638697317,
            "ebook_count_i": 1,
            "ia": [
                "alloyoflawmistbo00sand"
            ],
            "public_scan_b": false,
            "ia_collection_s": "printdisabled;internetarchivebooks;china",
            "printdisabled_s": "OL25280450M",
            "cover_edition_key": "OL25280450M",
            "cover_i": 7136479,
            "publisher": [
                "Doherty Associates, LLC, Tom",
                "Gollancz",
                "Tor Books",
                "Brandon Sanderson",
                "Macmillan Audio",
                "Ediciones B",
                "Tor Fantasy"
            ],
            "language": [
                "eng",
                "spa"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "subject": [
                "Imaginary Places",
                "Magic",
                "Fiction",
                "Fantasy",
                "Fiction, fantasy, epic",
                "nyt:hardcover-fiction=2011-11-27",
                "New York Times bestseller",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_amazon": [
                "1427214581"
            ],
            "ia_box_id": [
                "IA1146615"
            ],
            "publisher_facet": [
                "Brandon Sanderson",
                "Doherty Associates, LLC, Tom",
                "Ediciones B",
                "Gollancz",
                "Macmillan Audio",
                "Tor Books",
                "Tor Fantasy"
            ],
            "subject_facet": [
                "Accessible book",
                "Fantasy",
                "Fiction",
                "Fiction, fantasy, epic",
                "Imaginary Places",
                "Magic",
                "New York Times bestseller",
                "Protected DAISY",
                "nyt:hardcover-fiction=2011-11-27"
            ],
            "_version_": 1718394918422970400,
            "lcc_sort": "PS-3619.00000000.A533 A79 2011",
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "accessible_book",
                "fantasy",
                "fiction",
                "fiction_fantasy_epic",
                "imaginary_places",
                "magic",
                "new_york_times_bestseller",
                "nythardcover-fiction2011-11-27",
                "protected_daisy"
            ],
            "ddc_sort": "813.6"
        },
        {
            "key": "/works/OL17349394W",
            "type": "work",
            "seed": [
                "/books/OL27702801M",
                "/books/OL27097838M",
                "/books/OL28888532M",
                "/books/OL27702627M",
                "/books/OL27097836M",
                "/books/OL25926786M",
                "/books/OL28852368M",
                "/books/OL27097839M",
                "/works/OL17349394W",
                "/subjects/magic",
                "/subjects/fiction",
                "/subjects/fiction_fantasy_epic",
                "/subjects/fiction_political",
                "/subjects/fiction_suspense",
                "/subjects/nyt:combined-print-and-e-book-fiction=2016-02-14",
                "/subjects/new_york_times_bestseller",
                "/authors/OL1394865A"
            ],
            "title": "The Bands of Mourning (Mistborn, Book 6)",
            "title_suggest": "The Bands of Mourning (Mistborn, Book 6)",
            "has_fulltext": false,
            "edition_count": 8,
            "edition_key": [
                "OL27702801M",
                "OL27097838M",
                "OL28888532M",
                "OL27702627M",
                "OL27097836M",
                "OL25926786M",
                "OL28852368M",
                "OL27097839M"
            ],
            "publish_date": [
                "Jul 09, 2001",
                "2013",
                "Jan 05, 2017",
                "Jan 26, 2016",
                "2017",
                "January 26th 2016"
            ],
            "publish_year": [
                2013,
                2016,
                2001,
                2017
            ],
            "first_publish_year": 2001,
            "number_of_pages_median": 491,
            "lcc": [
                "PS-3619.00000000.A533",
                "PS-3619.00000000.A533B36 2016"
            ],
            "isbn": [
                "0765378574",
                "1473208270",
                "9781473208254",
                "1427267898",
                "9780765378583",
                "9788466659628",
                "9780765378576",
                "9781466862678",
                "0765378582",
                "8466659625",
                "9781473208278",
                "9781427267894",
                "0765387794",
                "9780765387790",
                "1473208254",
                "146686267X"
            ],
            "last_modified_i": 1633421084,
            "ebook_count_i": 0,
            "cover_edition_key": "OL25926786M",
            "cover_i": 7427758,
            "publisher": [
                "Tor",
                "Doherty Associates, LLC, Tom",
                "Ediciones B",
                "Tor Books",
                "Macmillan Audio",
                "GOLLANCZ"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "subject": [
                "Magic",
                "Fiction",
                "Fiction, fantasy, epic",
                "Fiction, political",
                "Fiction, suspense",
                "nyt:combined-print-and-e-book-fiction=2016-02-14",
                "New York Times bestseller"
            ],
            "id_amazon": [
                "0765387794",
                "1427267898"
            ],
            "id_goodreads": [
                "24019186"
            ],
            "publisher_facet": [
                "Doherty Associates, LLC, Tom",
                "Ediciones B",
                "GOLLANCZ",
                "Macmillan Audio",
                "Tor",
                "Tor Books"
            ],
            "subject_facet": [
                "Fiction",
                "Fiction, fantasy, epic",
                "Fiction, political",
                "Fiction, suspense",
                "Magic",
                "New York Times bestseller",
                "nyt:combined-print-and-e-book-fiction=2016-02-14"
            ],
            "_version_": 1718394918456524800,
            "lcc_sort": "PS-3619.00000000.A533B36 2016",
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "fiction",
                "fiction_fantasy_epic",
                "fiction_political",
                "fiction_suspense",
                "magic",
                "new_york_times_bestseller",
                "nytcombined-print-and-e-book-fiction2016-02-14"
            ]
        },
        {
            "key": "/works/OL25366824W",
            "type": "work",
            "seed": [
                "/books/OL33990926M",
                "/works/OL25366824W",
                "/authors/OL1394865A"
            ],
            "title": "Aleación de Ley (Nacidos de la Bruma [Mistborn] 4)",
            "title_suggest": "Aleación de Ley (Nacidos de la Bruma [Mistborn] 4)",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL33990926M"
            ],
            "publish_date": [
                "2012"
            ],
            "publish_year": [
                2012
            ],
            "first_publish_year": 2012,
            "number_of_pages_median": 368,
            "isbn": [
                "9788466651752",
                "8466651756"
            ],
            "last_modified_i": 1637830482,
            "ebook_count_i": 0,
            "publisher": [
                "Ediciones B"
            ],
            "language": [
                "spa"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "author_alternative_name": [
                "BRANDON SANDERSON",
                "Brandon Sanderson (author)",
                "SANDERSON BRANDON",
                "Sanderson  Brandon",
                "brandon sanderson"
            ],
            "publisher_facet": [
                "Ediciones B"
            ],
            "_version_": 1717389742960541700,
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ]
        },
        {
            "key": "/works/OL25870671W",
            "type": "work",
            "seed": [
                "/books/OL34903023M",
                "/works/OL25870671W",
                "/subjects/children's_fiction",
                "/subjects/fantasy_fiction",
                "/authors/OL1394865A"
            ],
            "title": "Brandon Sanderson's Fantasy Firsts : (the Way of Kings, Mistborn: the Final Empire, Rithmatist, Alcatraz vs. the Evil Librarians)",
            "title_suggest": "Brandon Sanderson's Fantasy Firsts : (the Way of Kings, Mistborn: the Final Empire, Rithmatist, Alcatraz vs. the Evil Librarians)",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL34903023M"
            ],
            "publish_date": [
                "2017"
            ],
            "publish_year": [
                2017
            ],
            "first_publish_year": 2017,
            "isbn": [
                "9780765399557",
                "0765399555"
            ],
            "last_modified_i": 1637830482,
            "ebook_count_i": 0,
            "publisher": [
                "Doherty Associates, LLC, Tom"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "author_alternative_name": [
                "BRANDON SANDERSON",
                "Brandon Sanderson (author)",
                "SANDERSON BRANDON",
                "Sanderson  Brandon",
                "brandon sanderson"
            ],
            "subject": [
                "Children's fiction",
                "Fantasy fiction"
            ],
            "publisher_facet": [
                "Doherty Associates, LLC, Tom"
            ],
            "subject_facet": [
                "Children's fiction",
                "Fantasy fiction"
            ],
            "_version_": 1717389743283503000,
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "children's_fiction",
                "fantasy_fiction"
            ]
        },
        {
            "key": "/works/OL5738150W",
            "type": "work",
            "seed": [
                "/books/OL27283355M",
                "/books/OL28265735M",
                "/books/OL8053698M",
                "/books/OL31941103M",
                "/books/OL24608673M",
                "/books/OL10936477M",
                "/books/OL34824531M",
                "/books/OL30373491M",
                "/books/OL31941102M",
                "/books/OL35273678M",
                "/books/OL31941101M",
                "/books/OL26797326M",
                "/books/OL31941100M",
                "/books/OL29291786M",
                "/books/OL27098429M",
                "/books/OL26804536M",
                "/books/OL28184758M",
                "/books/OL34136029M",
                "/works/OL5738150W",
                "/subjects/courts_and_courtiers",
                "/subjects/sieges",
                "/subjects/fiction",
                "/subjects/fiction_fantasy_general",
                "/subjects/fiction_fantasy_epic",
                "/authors/OL1394865A",
                "/authors/OL6901651A"
            ],
            "title": "The Well of Ascension",
            "title_suggest": "The Well of Ascension",
            "has_fulltext": true,
            "edition_count": 18,
            "edition_key": [
                "OL27283355M",
                "OL28265735M",
                "OL8053698M",
                "OL31941103M",
                "OL24608673M",
                "OL10936477M",
                "OL34824531M",
                "OL30373491M",
                "OL31941102M",
                "OL35273678M",
                "OL31941101M",
                "OL26797326M",
                "OL31941100M",
                "OL29291786M",
                "OL27098429M",
                "OL26804536M",
                "OL28184758M",
                "OL34136029M"
            ],
            "publish_date": [
                "Jul 09, 2017",
                "Oct 13, 2010",
                "Mar 24, 2017",
                "Jun 17, 2000",
                "May 01, 2010",
                "June 3, 2008",
                "Nov 30, 2016",
                "Oct 29, 2019",
                "Feb 08, 2008",
                "2021",
                "August 21, 2007",
                "Aug 05, 2014",
                "2010",
                "Sep 29, 2015",
                "May 01, 2012",
                "Feb 08, 2014"
            ],
            "publish_year": [
                2007,
                2012,
                2015,
                2016,
                2021,
                2008,
                2017,
                2010,
                2019,
                2014,
                2000
            ],
            "first_publish_year": 2000,
            "number_of_pages_median": 784,
            "lccn": [
                "2007014105"
            ],
            "publish_place": [
                "London, UK"
            ],
            "oclc": [
                "122715367"
            ],
            "lcc": [
                "PS-3619.00000000.A533 W45 2007",
                "PS-3619.00000000.A533",
                "PS-3619.00000000.A533W45 2007"
            ],
            "isbn": [
                "0792772598",
                "9788413143736",
                "9781628510959",
                "9780792772590",
                "0765377144",
                "9780575089938",
                "1628510951",
                "9788834715901",
                "1628510706",
                "9781427275110",
                "8466658904",
                "1250318572",
                "9788466658904",
                "9781427228208",
                "1427228205",
                "0765316889",
                "1473223083",
                "9781250318572",
                "9781628510706",
                "1429961813",
                "883471590X",
                "9781938570186",
                "1938570189",
                "9780765356130",
                "0765356139",
                "1427275114",
                "9780765316882",
                "9782360510122",
                "0575089938",
                "9781429961813",
                "9781473223080",
                "2360510126",
                "841314373X",
                "9780765377142"
            ],
            "last_modified_i": 1637832327,
            "ebook_count_i": 1,
            "ia": [
                "isbn_9780765356130"
            ],
            "public_scan_b": false,
            "ia_collection_s": "printdisabled;internetarchivebooks;china",
            "printdisabled_s": "OL10936477M",
            "cover_edition_key": "OL10936477M",
            "cover_i": 5081235,
            "first_sentence": [
                "The army crept like a dark stain across the horizon."
            ],
            "publisher": [
                "Audiogo",
                "Dragonsteel Entertainment, LLC",
                "Doherty Associates, LLC, Tom",
                "Fanucci",
                "Nova",
                "Tor Books",
                "Orion Publishing Co",
                "Macmillan Audio",
                "imusti",
                "Tor Fantasy",
                "ORBIT",
                "Tor Teen",
                "GraphicAudio",
                "Ediciones B Mexico"
            ],
            "language": [
                "eng",
                "spa"
            ],
            "author_key": [
                "OL1394865A",
                "OL6901651A"
            ],
            "author_name": [
                "Brandon Sanderson",
                "Michael Kramer"
            ],
            "subject": [
                "Courts and courtiers",
                "Sieges",
                "Fiction",
                "Fiction, fantasy, general",
                "Fiction, fantasy, epic",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_amazon": [
                "883471590X"
            ],
            "id_goodreads": [
                "2115046",
                "68429"
            ],
            "id_librarything": [
                "2165326"
            ],
            "ia_box_id": [
                "IA1155312"
            ],
            "publisher_facet": [
                "Audiogo",
                "Doherty Associates, LLC, Tom",
                "Dragonsteel Entertainment, LLC",
                "Ediciones B Mexico",
                "Fanucci",
                "GraphicAudio",
                "Macmillan Audio",
                "Nova",
                "ORBIT",
                "Orion Publishing Co",
                "Tor Books",
                "Tor Fantasy",
                "Tor Teen",
                "imusti"
            ],
            "subject_facet": [
                "Accessible book",
                "Courts and courtiers",
                "Fiction",
                "Fiction, fantasy, epic",
                "Fiction, fantasy, general",
                "Protected DAISY",
                "Sieges"
            ],
            "_version_": 1718394918489030700,
            "lcc_sort": "PS-3619.00000000.A533 W45 2007",
            "author_facet": [
                "OL1394865A Brandon Sanderson",
                "OL6901651A Michael Kramer"
            ],
            "subject_key": [
                "accessible_book",
                "courts_and_courtiers",
                "fiction",
                "fiction_fantasy_epic",
                "fiction_fantasy_general",
                "protected_daisy",
                "sieges"
            ]
        },
        {
            "key": "/works/OL5738154W",
            "type": "work",
            "seed": [
                "/books/OL24878609M",
                "/books/OL27090913M",
                "/books/OL21836626M",
                "/books/OL18687838M",
                "/books/OL24088527M",
                "/books/OL34597651M",
                "/books/OL28343716M",
                "/books/OL31964526M",
                "/books/OL28225434M",
                "/books/OL28273701M",
                "/books/OL28150836M",
                "/books/OL29292017M",
                "/books/OL26855204M",
                "/books/OL28932916M",
                "/books/OL34153590M",
                "/works/OL5738154W",
                "/subjects/fiction",
                "/subjects/fantasy",
                "/subjects/epic_fantasy",
                "/subjects/fantasy_fiction",
                "/subjects/fiction_fantasy_general",
                "/subjects/children's_fiction",
                "/subjects/imaginary_places",
                "/subjects/magic",
                "/authors/OL1394865A"
            ],
            "title": "The Hero of Ages",
            "title_suggest": "The Hero of Ages",
            "has_fulltext": true,
            "edition_count": 15,
            "edition_key": [
                "OL24878609M",
                "OL27090913M",
                "OL21836626M",
                "OL18687838M",
                "OL24088527M",
                "OL34597651M",
                "OL28343716M",
                "OL31964526M",
                "OL28225434M",
                "OL28273701M",
                "OL28150836M",
                "OL29292017M",
                "OL26855204M",
                "OL28932916M",
                "OL34153590M"
            ],
            "publish_date": [
                "2019",
                "Sep 29, 2015",
                "Jan 31, 2017",
                "Oct 07, 2014",
                "April 28, 2009",
                "Jun 30, 2013",
                "Oct 14, 2008",
                "2021",
                "2008",
                "Sep 20, 2018",
                "2010",
                "Jan 01, 2011",
                "May 01, 2012"
            ],
            "publish_year": [
                2012,
                2013,
                2009,
                2015,
                2021,
                2008,
                2017,
                2010,
                2011,
                2019,
                2018,
                2014
            ],
            "first_publish_year": 2008,
            "number_of_pages_median": 764,
            "lccn": [
                "2008031067"
            ],
            "publish_place": [
                "New York"
            ],
            "oclc": [
                "191245491"
            ],
            "lcc": [
                "PS-3619.00000000.A533H47 2008",
                "PS-3619.00000000.A533 H47 2008",
                "PS-3619.00000000.A533"
            ],
            "ddc": [
                "813.6"
            ],
            "isbn": [
                "9781250318626",
                "8413143748",
                "9780765356147",
                "9780765377159",
                "9780765316899",
                "1429960302",
                "9788413143743",
                "1427275092",
                "9780575089945",
                "9780792776444",
                "0765356147",
                "0792776445",
                "9781427228253",
                "0575089946",
                "9781473223059",
                "9788498727951",
                "1250318629",
                "0765316897",
                "9781427275097",
                "8498727952",
                "0765377152",
                "1473223059",
                "9781429960304",
                "1427228256",
                "9788466658911",
                "8466658912"
            ],
            "last_modified_i": 1637830482,
            "ebook_count_i": 2,
            "ia": [
                "heroages00sand",
                "isbn_9780765356147"
            ],
            "public_scan_b": false,
            "ia_collection_s": "internetarchivebooks;librarygenesis;printdisabled;china",
            "printdisabled_s": "OL21836626M;OL24088527M",
            "cover_edition_key": "OL21836626M",
            "cover_i": 5698797,
            "publisher": [
                "Orion Publishing Group, Limited",
                "Sound Library",
                "Tor",
                "Doherty Associates, LLC, Tom",
                "B de Bolsillo",
                "Nova",
                "Gollancz",
                "Tor Books",
                "Macmillan Audio",
                "Tor Fantasy",
                "Tor Teen",
                "B de Bolsillo (Ediciones B)",
                "Ediciones B Mexico"
            ],
            "language": [
                "eng",
                "spa"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "subject": [
                "Fiction",
                "Fantasy",
                "Epic Fantasy",
                "Fantasy fiction",
                "Fiction, fantasy, general",
                "Children's fiction",
                "Imaginary places",
                "Magic",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "2767793"
            ],
            "id_librarything": [
                "5279788"
            ],
            "ia_box_id": [
                "IA1152523"
            ],
            "publisher_facet": [
                "B de Bolsillo",
                "B de Bolsillo (Ediciones B)",
                "Doherty Associates, LLC, Tom",
                "Ediciones B Mexico",
                "Gollancz",
                "Macmillan Audio",
                "Nova",
                "Orion Publishing Group, Limited",
                "Sound Library",
                "Tor",
                "Tor Books",
                "Tor Fantasy",
                "Tor Teen"
            ],
            "subject_facet": [
                "Accessible book",
                "Children's fiction",
                "Epic Fantasy",
                "Fantasy",
                "Fantasy fiction",
                "Fiction",
                "Fiction, fantasy, general",
                "Imaginary places",
                "Magic",
                "Protected DAISY"
            ],
            "_version_": 1718394918467010600,
            "lcc_sort": "PS-3619.00000000.A533 H47 2008",
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ],
            "subject_key": [
                "accessible_book",
                "children's_fiction",
                "epic_fantasy",
                "fantasy",
                "fantasy_fiction",
                "fiction",
                "fiction_fantasy_general",
                "imaginary_places",
                "magic",
                "protected_daisy"
            ],
            "ddc_sort": "813.6"
        },
        {
            "key": "/works/OL17770504W",
            "type": "work",
            "seed": [
                "/books/OL27273283M",
                "/books/OL34891958M",
                "/books/OL33278902M",
                "/books/OL27218684M",
                "/books/OL27098443M",
                "/books/OL26797459M",
                "/books/OL26367469M",
                "/books/OL27378118M",
                "/books/OL34636705M",
                "/works/OL17770504W",
                "/subjects/fiction_fantasy_short_stories",
                "/subjects/fiction_fantasy_collections_&_anthologies",
                "/subjects/fiction_fantasy_general",
                "/authors/OL1394865A",
                "/authors/OL6901651A",
                "/authors/OL2865713A"
            ],
            "title": "Arcanum Unbounded",
            "title_suggest": "Arcanum Unbounded",
            "subtitle": "The Cosmere Collection",
            "has_fulltext": false,
            "edition_count": 9,
            "edition_key": [
                "OL27273283M",
                "OL34891958M",
                "OL33278902M",
                "OL27218684M",
                "OL27098443M",
                "OL26797459M",
                "OL26367469M",
                "OL27378118M",
                "OL34636705M"
            ],
            "publish_date": [
                "2016",
                "Nov 22, 2016",
                "Nov 24, 2016",
                "2019",
                "Feb 27, 2018"
            ],
            "publish_year": [
                2016,
                2018,
                2019
            ],
            "first_publish_year": 2016,
            "number_of_pages_median": 672,
            "lccn": [
                "2016043665"
            ],
            "publish_place": [
                "New York, USA"
            ],
            "oclc": [
                "935985784"
            ],
            "contributor": [
                "Sanderson, Brandon"
            ],
            "lcc": [
                "PS-3619.00000000.A533",
                "PS-3619.00000000.A533A6 2016",
                "PS-3619.00000000.A533 A6 2016"
            ],
            "ddc": [
                "813.6"
            ],
            "isbn": [
                "9781473218031",
                "9781473225930",
                "1473218039",
                "0765391163",
                "076539118X",
                "1473218055",
                "978-0-7653-9116-2 (hardcover)",
                "978-0-7653-9117-9 (e-book)",
                "9780765395641",
                "9781473218055",
                "9780765391179",
                "9780765391186",
                "9781427280626",
                "1473225930",
                "0765391171",
                "0765395649",
                "1427280622",
                "9780765391162"
            ],
            "last_modified_i": 1640338955,
            "ebook_count_i": 0,
            "cover_edition_key": "OL26797459M",
            "cover_i": 8452946,
            "publisher": [
                "GOLLANCZ",
                "Macmillan Audio",
                "Tor Fantasy",
                "Doherty Associates, LLC, Tom",
                "Tor",
                "Orion Publishing Group, Limited",
                "Gollancz"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A",
                "OL6901651A",
                "OL2865713A"
            ],
            "author_name": [
                "Brandon Sanderson",
                "Michael Kramer",
                "Kate Reading"
            ],
            "subject": [
                "Fiction, fantasy, short stories",
                "Fiction, fantasy, collections & anthologies",
                "Fiction, fantasy, general"
            ],
            "id_amazon": [
                "1473218055",
                "076539118X"
            ],
            "publisher_facet": [
                "Doherty Associates, LLC, Tom",
                "GOLLANCZ",
                "Gollancz",
                "Macmillan Audio",
                "Orion Publishing Group, Limited",
                "Tor",
                "Tor Fantasy"
            ],
            "subject_facet": [
                "Fiction, fantasy, collections & anthologies",
                "Fiction, fantasy, general",
                "Fiction, fantasy, short stories"
            ],
            "_version_": 1720020066227978200,
            "lcc_sort": "PS-3619.00000000.A533 A6 2016",
            "author_facet": [
                "OL1394865A Brandon Sanderson",
                "OL2865713A Kate Reading",
                "OL6901651A Michael Kramer"
            ],
            "subject_key": [
                "fiction_fantasy_collections__anthologies",
                "fiction_fantasy_general",
                "fiction_fantasy_short_stories"
            ],
            "ddc_sort": "813.6"
        },
        {
            "key": "/works/OL26349150W",
            "type": "work",
            "seed": [
                "/books/OL35581020M",
                "/works/OL26349150W",
                "/authors/OL1394865A"
            ],
            "title": "Shadows of Self",
            "title_suggest": "Shadows of Self",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL35581020M"
            ],
            "publish_date": [
                "2022"
            ],
            "publish_year": [
                2022
            ],
            "first_publish_year": 2022,
            "isbn": [
                "9781473233355",
                "1473233356"
            ],
            "last_modified_i": 1637830482,
            "ebook_count_i": 0,
            "publisher": [
                "Orion Publishing Group, Limited"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "author_alternative_name": [
                "BRANDON SANDERSON",
                "Brandon Sanderson (author)",
                "SANDERSON BRANDON",
                "Sanderson  Brandon",
                "brandon sanderson"
            ],
            "publisher_facet": [
                "Orion Publishing Group, Limited"
            ],
            "_version_": 1717389743261483000,
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ]
        },
        {
            "key": "/works/OL26349161W",
            "type": "work",
            "seed": [
                "/books/OL35581032M",
                "/works/OL26349161W",
                "/authors/OL1394865A"
            ],
            "title": "Alloy of Law",
            "title_suggest": "Alloy of Law",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL35581032M"
            ],
            "publish_date": [
                "2022"
            ],
            "publish_year": [
                2022
            ],
            "first_publish_year": 2022,
            "isbn": [
                "9781473233348",
                "1473233348"
            ],
            "last_modified_i": 1637830482,
            "ebook_count_i": 0,
            "publisher": [
                "Orion Publishing Group, Limited"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "author_alternative_name": [
                "BRANDON SANDERSON",
                "Brandon Sanderson (author)",
                "SANDERSON BRANDON",
                "Sanderson  Brandon",
                "brandon sanderson"
            ],
            "publisher_facet": [
                "Orion Publishing Group, Limited"
            ],
            "_version_": 1717389743263580200,
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ]
        },
        {
            "key": "/works/OL26349157W",
            "type": "work",
            "seed": [
                "/books/OL35581028M",
                "/works/OL26349157W",
                "/authors/OL1394865A"
            ],
            "title": "Bands of Mourning",
            "title_suggest": "Bands of Mourning",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL35581028M"
            ],
            "publish_date": [
                "2022"
            ],
            "publish_year": [
                2022
            ],
            "first_publish_year": 2022,
            "isbn": [
                "1473233364",
                "9781473233362"
            ],
            "last_modified_i": 1637830482,
            "ebook_count_i": 0,
            "publisher": [
                "Orion Publishing Group, Limited"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1394865A"
            ],
            "author_name": [
                "Brandon Sanderson"
            ],
            "author_alternative_name": [
                "BRANDON SANDERSON",
                "Brandon Sanderson (author)",
                "SANDERSON BRANDON",
                "Sanderson  Brandon",
                "brandon sanderson"
            ],
            "publisher_facet": [
                "Orion Publishing Group, Limited"
            ],
            "_version_": 1717389743288746000,
            "author_facet": [
                "OL1394865A Brandon Sanderson"
            ]
        }
    ],
    "num_found": 15,
    "q": "mistborn",
    "offset": null
}