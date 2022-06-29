import {IGroup, IEducationProgram} from "./main";
import {ITeacher} from "./user"

export interface ISubject{
    id: number,
    name_subject: string,
    group: IGroup,
    teachers: ITeacher[]
    hours: number,
    loans: number,
    semester: number,
    final_semester: number,
    form_of_control: string,
    educational_program: IEducationProgram,
    url_on_moodle: string,
    finally_subject: boolean
}
