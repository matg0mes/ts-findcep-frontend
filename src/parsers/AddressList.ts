import { Address } from "./Address";

class AddressList {
  items: Array<Address> = [];

  constructor(data) {
    data?.forEach((element) => {
      const address = new Address(element);
      this.items.push(address);
    });
  }
}

export { AddressList };
