import { Gender } from "./Gender";
import { Status } from "./Status";

export interface ICharacter {
    id: number;
    name: string;
    type: string;
    image: string;
    gender: Gender;
    status: Status;
    episodes: string[];
    species: string;
    origin: any;
    location: any;
}
