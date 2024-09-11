

import { Challenge } from "../../core/domain/entities";
import { IChallengeRepositoy } from "../../core/interfaces/repositories";

export class inMemoryChallengeRepository implements IChallengeRepositoy {
  public items: Challenge[] = [];

  async findByID(id: string): Promise<Challenge | null> {
    const student = this.items.find((student) => student.id === id);

    if (!student) {
      return null;
    }
    return student;
  }
}
