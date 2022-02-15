import { searchTypes } from "./search.type";

const initialStateSearch = {
    searchField:''
}

const searchReducer =(state= initialStateSearch, action:any) => {
    switch (action.type) {
        case searchTypes.CHANGE_SEARCH_FIELD:
        return {
            ...state,
            searchField:action.payload,
        };
        default:
            return state;
    }
};

export default searchReducer;