import { Challenge } from "../../domain/entities";

export interface IChallengeRepositoy{
  findByID(id:string): Promise<Challenge|null>
}
