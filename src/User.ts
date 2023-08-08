
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = "Sulakshitha Rathnayake";
    this.location = {
        lat: 40.7128,
        lng: -74.0060
    }

    console.log(this.name);
  }
}
