import { Entity } from "../abstracts";
type SubmissionProps = {
  studentID: string;
  challengeID: string;
  createdAT?: Date;
};
export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }
  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission({
      ...props,
      createdAT: props.createdAT ?? new Date(),
    });
    return submission;
  }
}
