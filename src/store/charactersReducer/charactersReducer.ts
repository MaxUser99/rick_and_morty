interface ICharState {};

const initialState: ICharState = {};

type UserAction = {
    type: string;
    payload?: any;
};

const reducer = (state = initialState, action: UserAction): ICharState => {
    return state;
};

export default reducer;
