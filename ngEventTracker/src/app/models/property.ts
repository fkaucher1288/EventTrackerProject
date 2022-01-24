export class Property {

  id: number;
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  marketPrice: number | undefined;
  expectedCashflow: number | undefined;
  capRate: number | undefined;

  constructor(id: number = 0, address?: string, city?: string, state?: string, marketPrice?: number,
    expectedCashflow?: number, capRate?: number) {
      this.id = id;
      this.address = address;
      this.city = city;
      this.state = state;
      this.marketPrice = marketPrice;
      this.expectedCashflow = expectedCashflow;
      this.capRate = capRate;

    }

}
