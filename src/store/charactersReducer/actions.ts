import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { IState } from './state';
import apiRequester from 'api/apiRequester';

type ThunkResult<R> = ThunkAction<R, IState, typeof apiRequester, Action>;
export type CharacterThunkDispatch = ThunkDispatch<IState, typeof apiRequester, Action>;

export const LOAD_CHARACTER = 'LOAD_CHARACTER';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';

export interface LoadCharactersAction {
    type: typeof LOAD_CHARACTER
}
export interface SetCharactersAction {
    type: typeof SET_CHARACTERS
}
export interface UpdateCharactersAction {
    type: typeof UPDATE_CHARACTERS
}

export type CharacterActions = LoadCharactersAction
    | SetCharactersAction
    | UpdateCharactersAction;

export const loadCharacters = (): ThunkResult<Promise<void>> => (
    async (dispatch, getState, api) => {
        const res = await api.getCharacters();
        console.log('fetched chars: ', res);
    }
);
