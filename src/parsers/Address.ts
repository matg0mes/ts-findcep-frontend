class Address {
  id: string;

  zipCode: string;

  street: string;

  complement: string;

  neighborhood: string;

  city: string;

  state: string;

  updated_at: Date;

  created_at: Date;

  constructor({
    id,
    zipCode,
    street,
    complement,
    neighborhood,
    city,
    state,
    updated_at,
    created_at,
  }: any) {
    this.id = id;
    this.zipCode = zipCode?.replace(/[^0-9]+/g, "");
    this.street = street;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.updated_at = updated_at;
    this.created_at = created_at;
  }
}

export { Address };
