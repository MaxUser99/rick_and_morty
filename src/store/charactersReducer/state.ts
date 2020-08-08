import { ICharacter } from "interfaces/ICharacter";

interface ILoadingStatus {
    loading: boolean;
    loaded: boolean;
    error: boolean;
}

export interface IState {
    page: number | null;
    characters: ICharacter[];
    requestStatuses: Record<any, ILoadingStatus>;
}

export const initialRequestStatus: ILoadingStatus = { loading: false, loaded: false, error: false };

const initialState: IState = {
    page: null,
    characters: [],
    requestStatuses: {
        characters: { ...initialRequestStatus }
    }
};

export default initialState;
