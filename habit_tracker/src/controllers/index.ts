import * as habitRoutes from "./habit.controller";

export const initialize = function (app) {
  habitRoutes.initialize(app);
};
