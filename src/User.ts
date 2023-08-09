
export class User {
  name: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.name = "Sulakshitha Rathnayake";
    this.location = {
        lat: 7.8731,
        lon: 80.7718
    }

    console.log(this.name);
  }
}
