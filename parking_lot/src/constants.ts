export enum VehicleType {
  Car,
  Truck,
  Van,
  Motorbike,
  Electric,
}

export enum ParkingSpotType {
  Compact,
  Large,
  Handicapped,
  Motorbike,
  Electric,
}

export enum AccountStatus {
  ACTIVE,
  BLOCKED,
  BANNED,
  COMPROMISED,
  ARCHIVED,
  UNKNOWN,
}

export class Address {
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private state: string;
  private country: string;
  private zipCode: string;
}

export class Person {
  private name: string;
  private email: string;
  private phone: string;
  private address: Address;
}

export const NANOID_LENGTH = 10;
export const NANOID_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
