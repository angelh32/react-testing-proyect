import { ApiBook, ApiBooksResults } from "../types/APITypes"
import { Book } from "../types/types"

export const removeHtmlTag = (rawText: string) => {
    return rawText.replace(new RegExp(/\<[\/bip]+\>/, 'g'), "")
}

export function apiToBooks(rawData: ApiBooksResults): Book[] {
    console.log("LX - rawData", rawData)
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
    return fetch(url)
}

export const callApiBook = (searchInfo: string) => {
    const searchFormat = searchInfo.toLowerCase().replace(new RegExp(" ", 'g'), "-");
    console.log("LX - searchFormat", searchFormat)
    return callApi(`http://openlibrary.org/search.json?q=${searchInfo}&page=1`)
        .then(apicall => apicall.json())
        .then(resJson => apiToBooks(resJson as ApiBooksResults))
}