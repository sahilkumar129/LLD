import { ParkingSlotType, VehicleType } from "../constants";
import { ParkingFloor } from "./ParkingFloor";

export class ParkingSlot {
  floor: ParkingFloor;
  vehicleType: VehicleType;
  parkingSlotType: ParkingSlotType;
  occupied: boolean;
}
