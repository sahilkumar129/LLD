import { VehicleType } from "../constants";
import { ParkingTicket } from "./ticket";

export abstract class Vehicle {
  private licenseNumber: string;
  private vehicleType: VehicleType;
  private parkingTicket: ParkingTicket;

  constructor(licenseNumber: string, vehicleType: VehicleType) {
    this.licenseNumber = licenseNumber;
    this.vehicleType = vehicleType;
  }

  public getLicenseNumber = () => this.licenseNumber;
  public setLicenseNumber = (number: string) => (this.licenseNumber = number);
  public getVehicleType = () => this.vehicleType;
  public setVehicleType = () => this.vehicleType;
  public getParkingTicket = () => this.parkingTicket;
  public assignTicket = (ticket: ParkingTicket) => (this.parkingTicket = ticket);
}

export class Car extends Vehicle {
  constructor(licenseNumber: string) {
    super(licenseNumber, VehicleType.Car);
  }
}

export class Van extends Vehicle {
  constructor(licenseNumber: string) {
    super(licenseNumber, VehicleType.Van);
  }
}

export class Truck extends Vehicle {
  constructor(licenseNumber: string) {
    super(licenseNumber, VehicleType.Truck);
  }
}

export class Motorbike extends Vehicle {
  constructor(licenseNumber: string) {
    super(licenseNumber, VehicleType.Motorbike);
  }
}

export class Electric extends Vehicle {
  constructor(licenseNumber: string) {
    super(licenseNumber, VehicleType.Electric);
  }
}
