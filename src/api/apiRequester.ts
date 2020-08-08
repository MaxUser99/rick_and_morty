import axios from 'axios';
import querystring from 'query-string';
import { Status } from 'interfaces/Status';
import { Gender } from 'interfaces/Gender';
import { ICharacter } from 'interfaces/ICharacter';

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
        return axios.get(this.charactersUrl + querystring.stringify(params))
            .then(({ data: { results, info: { next } } }) => {
                const nextPage: number = next ?? querystring.parseUrl(next)?.query?.page;

                console.log('next page: ', nextPage);

                return {
                    characters: (results as ICharacter[]),
                    next: nextPage || null
                };
            })
            .catch(() => null);
    }
}

const requester = new ApiRequester();

export default requester;
