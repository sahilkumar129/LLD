import { Habit } from "../entities/habit.entitiy";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export class HabitService {
  static getHabits(req: Request, res: Response): Habit[] {
    const habits: Habit[] = Habit.getHabits();
    return habits;
  }

  static addHabit(req: Request, res: Response): void {
    const { name, description } = req.body;
    const habit: Habit = new Habit(uuidv4(), name, description);
    Habit.addHabit(habit);
  }

  static deleteHabit(req: Request, res: Response): void {
    const id = req.params.id;
    Habit.deleteHabit(id);
  }
}
