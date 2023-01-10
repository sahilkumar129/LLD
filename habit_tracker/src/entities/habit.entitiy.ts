import { HabitData } from "../data/habit.data";

export class Habit {
  constructor(public id: string, public name: string, public description: string) {}

  public static getHabits(): Habit[] {
    const habits: Habit[] = [];
    for (const [_, value] of HabitData.habits) habits.push(value);
    return habits;
  }

  public static addHabit(habit: Habit): void {
    HabitData.habits.set(habit.id, habit);
  }

  public static deleteHabit(id: string): void {
    HabitData.habits.delete(id);
  }
}
