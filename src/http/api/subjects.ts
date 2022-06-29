import axios, {AxiosResponse} from "axios";

import BaseAPI from "./base";
import {ISubject} from "../../models/subject";


export interface IMain{
    count: number,
    next: string | null,
    previous: string | null,
    results: ISubject[]
}


class StudentAPI extends BaseAPI {

    async subjectList(url: string): Promise<AxiosResponse<IMain>>{
        return await axios.get(`http://127.0.0.1:8000/${this.baseUrl}/${url}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}}
        )
    }
}

export const ins3 = new StudentAPI('methodist/subject')

