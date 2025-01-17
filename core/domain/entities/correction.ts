import { Entity } from "../abstracts";

type CorrectionProps = {
  grade: number;
  submissionID: string;
  createdAT: Date;
};

export  class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }

  static create(props: CorrectionProps, id?: string) {
    const correction = new Correction(props, id);

    return correction;
  }
}
