import React, { useEffect } from 'react';
import { loadCharacters } from 'store/charactersReducer/actions';
import { connect } from 'react-redux';

interface ICharactersProps {
    loadCharacters?: () => void;
}

const Characters = (props: ICharactersProps) => {
    useEffect(() => {
        props.loadCharacters?.();
    }, [])
    return <div>Characters</div>
}

const mapDispatchToProps = (dispatch: any) => ({
    loadCharacters: () => dispatch(loadCharacters())
});

export default connect(null, mapDispatchToProps)(Characters);
