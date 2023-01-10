import * as parkingLotRoutes from "./parkingLot.controller";
import * as parkingFloorRoutes from "./parkingFloor.controller";
import * as adminRoutes from "./admin.controller";
import * as customerRoutes from "./customer.controller";
import * as parkingAttendantRoutes from "./parkingAttendant.controller";
import * as ticketRoutes from "./ticket.controller";
import * as panelRoutes from "./panel.controller";
import * as vehicleRoutes from "./vehicle.controller";
import * as paymentRoutes from "./payment.controller";
import * as parkingDisplayBoardRoutes from "./parkingDisplayBoard.controller";

export const initialize = function (app) {
  parkingLotRoutes.initialize(app);
  parkingFloorRoutes.initialize(app);
  adminRoutes.initialize(app);
  customerRoutes.initialize(app);
  parkingAttendantRoutes.initialize(app);
  ticketRoutes.initialize(app);
  panelRoutes.initialize(app);
  vehicleRoutes.initialize(app);
  paymentRoutes.initialize(app);
  parkingDisplayBoardRoutes.initialize(app);
};
