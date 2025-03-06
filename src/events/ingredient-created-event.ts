import { ObjectId } from "mongodb";
import { Subjects } from "./subjects";

export interface IngredientCreatedEvent {
  subject: Subjects.IngredientCreated;
  data: {
    id: ObjectId;
    version: number;
    name: string;
    price: number;
    status: boolean;
    seller?: string;
  };
}
