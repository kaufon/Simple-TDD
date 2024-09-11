
import { Student } from "../../core/domain/entities";
import { IStudentRepository } from "../../core/interfaces/repositories";

export class inMemoryStudensRepository implements IStudentRepository {
  public items: Student[] = [];

  async findByID(id: string): Promise<Student | null> {
    const student = this.items.find((student) => student.id === id);

    if (!student) {
      return null;
    }
    return student;
  }
}
