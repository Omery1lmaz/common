import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface IngredientCreatedEvent {
  subject: Subjects.IngredientCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    name: string;
    price: number;
    status: boolean;
    seller?: string;
  };
}
