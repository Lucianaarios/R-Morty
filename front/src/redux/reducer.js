import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
      return { 
        ...state,
         myFavorites: action.payload,
          allFavorites: action.payload 
        };

        case REMOVE_FAV:
            return {
                 ...state, 
                 myFavorites: action.payload
                 };

                case FILTER:
                    const filterByGender = [...state.allFavorites].filter((favorite) =>{
                        return favorite.gender === action.payload
                    });
                    return {
                        ...state,
                        myFavorites: filterByGender
                    }

                    case ORDER:
                        const favoritesOrdered = action.payload === 'A' 
                        ? [...state.allFavorites].sort((a,b) => a.id - b.id)
                        : [...state.allFavorites].sort((a, b) => b.id - a.id);

                        return {
                            ...state,
                            myFavorites: favoritesOrdered
                        }
                default:
                    return {
                        ...state
                    }
    }
}

export default reducer;