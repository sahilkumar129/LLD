import * as admin from "../services/admin.services";

export const initialize = function (app) {
  app.get("/admin", admin.getAdmin);
  app.post("/admin", admin.addAdmin);
  app.put("/admin", admin.updateAdmin);
  app.post("/admin/login", admin.login);
  app.post("/admin/logout", admin.logout);
};
