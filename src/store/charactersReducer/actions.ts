import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { IState } from './state';
import apiRequester from 'api/apiRequester';
import { ICharacter } from 'interfaces/ICharacter';

type ThunkResult<R> = ThunkAction<R, IState, typeof apiRequester, Action>;
export type CharacterThunkDispatch = ThunkDispatch<IState, typeof apiRequester, Action>;

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const SET_PAGE = 'SET_PAGE';

export interface LoadCharactersAction {
    type: typeof LOAD_CHARACTERS
}
export interface SetCharactersAction {
    type: typeof SET_CHARACTERS,
    payload: Map<number, ICharacter>
}
export interface SetPageAction {
    type: typeof SET_PAGE,
    payload: number | null
}

export type CharacterActions = LoadCharactersAction
    | SetCharactersAction
    | SetPageAction;

export const setCharacters = (characters: Map<number, ICharacter>): CharacterActions => (
    {
        type: SET_CHARACTERS,
        payload: characters
    }
);

export const setPage = (page: number | null): SetPageAction => (
    {
        type: SET_PAGE,
        payload: page
    }
);

export const loadCharacters = (): ThunkResult<Promise<void>> => (
    async (dispatch, _, api) => {
        const result = await api.getCharacters();

        if (result === null) {
            // TODO: handle error
            return;
        }

        const { characters, next } = result;
        const charactersMap = new Map(characters.map(x => ([ x.id, x])));
        dispatch(setCharacters(charactersMap));
        dispatch(setPage(next));
    }
);
