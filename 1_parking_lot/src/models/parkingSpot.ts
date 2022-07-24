import { NANOID_ALPHABET, NANOID_LENGTH, ParkingSpotType } from "../constants";
import { Vehicle } from "./vehicle";
import { customAlphabet } from "nanoid";

export abstract class ParkingSpot {
  private number: string;
  private free: boolean;
  private vehicle: Vehicle;
  private parkingSpotType: ParkingSpotType;
  constructor(parkingSpotType: ParkingSpotType) {
    const nanoid = customAlphabet(NANOID_ALPHABET, NANOID_LENGTH);
    this.number = nanoid();
    this.parkingSpotType = parkingSpotType;
    this.free = true;
  }
  public isFree = () => this.free;
  public getParkingSpotNumber = () => this.number;
  public getParkingSpotType = () => this.parkingSpotType;
  public getVehicle = () => this.vehicle;
  public addVehicle = (vehicle: Vehicle) => {
    this.vehicle = vehicle;
    this.free = false;
  };
  public removeVehicle = () => {
    this.vehicle = null;
    this.free = true;
  };
}

export class HandicappedSpot extends ParkingSpot {
  constructor() {
    super(ParkingSpotType.Handicapped);
  }
}

export class CompactSpot extends ParkingSpot {
  constructor() {
    super(ParkingSpotType.Compact);
  }
}

export class LargeSpot extends ParkingSpot {
  constructor() {
    super(ParkingSpotType.Large);
  }
}

export class ElectricSpot extends ParkingSpot {
  constructor() {
    super(ParkingSpotType.Electric);
  }
}

export class MotorbikeSpot extends ParkingSpot {
  constructor() {
    super(ParkingSpotType.Motorbike);
  }
}
