import $axios from "../index";

import axios, {AxiosResponse} from "axios";

import BaseAPI from "./base";


interface ITeacher{
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    surname: string,
    department: number
}

interface IGroup{
    id: number,
    name: string,
    semesters: number[]
}

interface IEdProg{
    id: number,
    name: string,
}


interface ISubject{
    id: number,
    name_subject: string,
    group: IGroup,
    teachers: ITeacher[]
    hours: number,
    loans: number,
    semester: number,
    final_semester: number,
    form_of_control: string,
    educational_program: IEdProg,
    url_on_moodle: string,
    finally_subject: boolean
}


interface IMain{
    count: number,
    next: string | null,
    previous: string | null,
    results: ISubject[]
}


class StudentAPI extends BaseAPI {

    async studentList(url: string): Promise<AxiosResponse<IMain>>{
        const res = await axios.get(`http://127.0.0.1:8000/${this.baseUrl}/${url}`,
            {headers:{'Authorization': `Bearer ${localStorage.getItem('access')}`}}
        )
        return res
    }
}

const ins2 = new StudentAPI('methodist/student')

export default {ins2};
