import { AccountStatus, Person } from "../constants";
import { CustomerInfoPanel, EntryPanel, ExitPanel } from "./panel";
import { ParkingDisplayBoard } from "./parkingDisplayBoard";
import { ParkingFloor } from "./parkingFloor";
import { ParkingSpot } from "./parkingSpot";

abstract class Account {
  private username: string;
  private password: string;
  private accountStatus: AccountStatus;
  private person: Person;
  public getUsername = () => this.username;
  public setUsername = (username: string) => (this.username = username);
  public getPassword = () => this.password;
  public setPassword = (password: string) => (this.password = password);
  public getAccountStatus = () => this.accountStatus;
  public setAccountStatus = (status: AccountStatus) => (this.accountStatus = status);
  public getPerson = () => this.person;
  public setPerson = (person: Person) => (this.person = person);
  /**
   *
   * @param username
   * @param oldPassword
   * @param newPassword
   */
  public resetPassword(username: string, oldPassword: string, newPassword: string): boolean {
    if (username === this.getUsername() && this.getPassword() === oldPassword) {
      this.setPassword(newPassword);
      return true;
    }
    return false;
  }
}

export class ParkingAttendant extends Account {
  /**
   *
   * @param ticketNumber
   * @returns
   */
  processTicket(ticketNumber: string): boolean {
    return true;
  }
}

export class Admin extends Account {
  addParkingFloor(floor: ParkingFloor): boolean {
    return true;
  }
  addParkingSpot(floorName: string, parkingSpot: ParkingSpot): boolean {
    return true;
  }
  addParkingDisplayBoard(floorName: string, parkingDisplayBoard: ParkingDisplayBoard): boolean {
    return true;
  }
  addCustomerInfoPane(floorName: string, customerInfoPane: CustomerInfoPanel): boolean {
    return true;
  }
  addEntryPanel(floorName: string, entryPanel: EntryPanel): boolean {
    return true;
  }
  addExitPanel(floorName: string, exitPanel: ExitPanel): boolean {
    return true;
  }
}
