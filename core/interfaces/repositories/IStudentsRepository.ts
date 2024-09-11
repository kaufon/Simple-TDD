import  { Student } from "../../domain/entities";

export interface IStudentRepository{
  findByID(id:string): Promise<Student | null>
}
