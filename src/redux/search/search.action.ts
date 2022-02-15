import { searchTypes } from "./search.type"

export const setSearchField = (text: any) =>({
    type:searchTypes.CHANGE_SEARCH_FIELD,
    payload:text
});