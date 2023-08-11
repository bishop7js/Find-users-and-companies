
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = "Sulakshitha Rathnayake";
    this.location = {
        lat: 7.8731,
        lng: 80.7718
    }
  }

  renderInfoContent() {
    return (
      `User name : ${this.name}`
    );
  }
}
