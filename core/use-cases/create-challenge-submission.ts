import { Submission } from "../domain/entities";
import {
  IChallengeRepositoy,
  IStudentRepository,
} from "../interfaces/repositories";
type CreateChallengeSubmissionRequest = {
  studentID: string;
  challengeID: string;
};
export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: IStudentRepository,
    private challengeRepositoy: IChallengeRepositoy,
  ) { }
  async execute({ studentID, challengeID }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findByID(studentID);
    if (!student) {
      throw new Error("no student");
    }
    const challenge = await this.challengeRepositoy.findByID(challengeID);
    if (!challenge) {
      throw new Error("no challenge");
    }
    const submission = Submission.create({ studentID, challengeID });
    return submission;
  }
}
