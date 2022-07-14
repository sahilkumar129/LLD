abstract class Account {
  phoneNumber: string;
  password: string;
  abstract getDetails(): Account;
  abstract editDetails(): Account;
  abstract login(): Account;
  abstract logout(): Account;
}

export class ParkingAttendant extends Account {
  constructor() {
    super();
  }
  getDetails(): Account {
    return this;
  }
  editDetails(): Account {
    return this;
  }
  login(): Account {
    return this;
  }
  logout(): Account {
    return this;
  }
}

export class Customer extends Account {
  constructor() {
    super();
  }
  getDetails(): Account {
    return this;
  }
  editDetails(): Account {
    return this;
  }
  login(): Account {
    return this;
  }
  logout(): Account {
    return this;
  }
}

export class Admin extends Account {
  constructor() {
    super();
  }
  getDetails(): Account {
    return this;
  }
  editDetails(): Account {
    return this;
  }
  login(): Account {
    return this;
  }
  logout(): Account {
    return this;
  }
}
