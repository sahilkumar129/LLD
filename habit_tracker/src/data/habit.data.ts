import { Habit } from "../entities/habit.entitiy";

export class HabitData {
  static habits: Map<string, Habit> = new Map();
}
