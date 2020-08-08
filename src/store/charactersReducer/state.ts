import { ICharacter } from "interfaces/ICharacter";

export interface IState {
    characters: ICharacter[];
}

const initialState: IState = {
    characters: []
};

export default initialState;
