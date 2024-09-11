import { inMemoryChallengeRepository } from "../../tests/repositories/in-memory-challenges-repository";
import { inMemoryStudensRepository } from "../../tests/repositories/in-memory-students-repository";
import { Challenge, Student } from "../domain/entities";
import { CreateChallengeSubmission } from "./index";
describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", async () => {
    const studentsRepository = new inMemoryStudensRepository();
    const challengeRepository = new inMemoryChallengeRepository();

    const student = Student.create({
      name: "Gabriel banana",
      email: "banaan@gmail.com",
    });
    const challenge = Challenge.create({
      title: "Banana",
      instructionsURL: "olaaa",
      difficultyLevel: "12",
    });
    studentsRepository.items.push(student);
    challengeRepository.items.push(challenge);
    const SuT = new CreateChallengeSubmission(
      studentsRepository,
      challengeRepository,
    );

    const reponse = await SuT.execute({
      studentID: student.id,
      challengeID: challenge.id,
    });
    expect(reponse).toBeTruthy();
    expect(reponse.props.studentID).toEqual(student.id);
    expect(studentsRepository.findByID(reponse.props.studentID)).toEqual(
      studentsRepository.findByID(student.id),
    );
  });
});
