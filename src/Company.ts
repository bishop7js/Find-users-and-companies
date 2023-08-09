export class Company {

    name: string;
    location : {
        lat: number;
        lon: number;
    }

    constructor() {
        this.name = "Google"
        this.location = {
            lat:  37.419857,
            lon: -122.078827
        }
    }

}