import mongoose from "mongoose";
import { Subjects } from "./subjects";

export interface IngredientCreatedEvent {
  subject: Subjects.IngredientCreated;
  data: {
    id: mongoose.Types.ObjectId;
    version: number;
    name: string;
    price: number;
    status: boolean;
    seller?: string;
  };
}
