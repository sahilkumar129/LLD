import { HabitService } from "../services/habit.service";

export const initialize = function (app) {
  app.get("/habits", HabitService.getHabits);
  app.post("/habit", HabitService.addHabit);
  app.delete("/habit/:id", HabitService.deleteHabit);
};
