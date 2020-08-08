import initialState, { IState, initialRequestStatus } from "./state";
import { CharacterActions } from "./actions";

const reducer = (state: IState = initialState, action: CharacterActions): IState => {
    switch (action.type) {
        case 'LOAD_CHARACTERS': {
            const newCharactersStatus = { ...initialRequestStatus, loading: true };
            return {
                ...state,
                requestStatuses: {
                    ...state.requestStatuses,
                    characters: newCharactersStatus
                }
            }
        }
        case 'SET_CHARACTERS': {
            const { payload } = action;
            const updatedIds: number[] = [];
            const characters = state.characters.map(char => {
                const newChar = payload.get(char.id);
                if (newChar) {
                    updatedIds.push(char.id)
                    return newChar;
                }
                return char;
            });
            const itemsToPush = Array.from(payload.values()).filter(({ id }) => updatedIds.includes(id) === false);

            return { ...state, characters: [ ...characters, ...itemsToPush ]};
        }
        case 'SET_PAGE': {
            const { payload } = action;
            return { ...state, page: payload };
        }
        default: 
            return state;
    }
}

export default reducer;
