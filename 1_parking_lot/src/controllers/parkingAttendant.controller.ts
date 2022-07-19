import * as parkingAttendant from "../services/parkingAttendant.services";

export const initialize = function (app) {
  app.get("/parkingAttendant", parkingAttendant.getParkingAttendant);
  app.post("/parkingAttendant", parkingAttendant.addParkingAttendant);
  app.put("/parkingAttendant", parkingAttendant.updateParkingAttendant);
  app.post("/parkingAttendant/login", parkingAttendant.login);
  app.post("/parkingAttendant/logout", parkingAttendant.logout);
};
