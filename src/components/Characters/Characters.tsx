import React, { useEffect } from 'react';
import { loadCharacters } from 'store/charactersReducer/actions';
import { connect } from 'react-redux';
import { ICharacter } from 'interfaces/ICharacter';

interface ICharactersProps {
    loadCharacters?: () => void;
    characters?: ICharacter[];
}

const Characters = (props: ICharactersProps) => {
    useEffect(() => {
        props.loadCharacters?.();
    }, [])
    console.log('chars: ', props.characters)
    return <div>Characters</div>
}

const mapStateToProps = (state: any) => ({
    characters: state.characters.characters
});

const mapDispatchToProps = (dispatch: any) => ({
    loadCharacters: () => dispatch(loadCharacters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
