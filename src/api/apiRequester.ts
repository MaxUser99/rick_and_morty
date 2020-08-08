import axios from 'axios';
import querystring from 'query-string';
import { Status } from 'interfaces/Status';
import { Gender } from 'interfaces/Gender';

interface ICharacterParams {
    page?: number;
    ids?: number[];
    status?: Status;
    species?: string;
    type?: string;
    gender?: Gender;
}

class ApiRequester {
    private readonly charactersUrl = 'https://rickandmortyapi.com/api/character';
    private readonly locationsUrl = 'https://rickandmortyapi.com/api/location';
    private readonly episodesUrl = 'https://rickandmortyapi.com/api/episode';

    getCharacters = async (params: ICharacterParams = {}) => {
        return axios.get('https://rickandmortyapi.com/api/character' + querystring.stringify(params))
            .then(({ data }) => data)
            .catch(() => null);
    }
}

const requester = new ApiRequester();

export default requester;
