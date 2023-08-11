export class Company {

    name: string;
    location : {
        lat: number;
        lng: number;
    };
    phrase: string;

    constructor() {
        this.name = "Google"
        this.location = {
            lat:  37.419857,
            lng: -122.078827
        },
        this.phrase = "We are trying to easy peoples life"
    }

    renderInfoContent() {
        return (
          `Company name : ${this.name}
          <br />
          <br />
          Compnay description : ${this.phrase}`
        );
      }

}