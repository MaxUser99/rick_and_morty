// import { ICharacter } from "interfaces/ICharacter";
// import { SyncAction, ActionType } from "./actions";

import initialState, { IState } from "./state";
import { CharacterActions } from "./actions";

const reducer = (state: IState = initialState, action: CharacterActions): IState => {
    switch (action.type) {
        case 'LOAD_CHARACTER': return state;
        case 'SET_CHARACTERS': return state;
        case 'UPDATE_CHARACTERS': return state;
        default: return state;
    }
}

export default reducer;
