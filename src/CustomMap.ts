import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap = google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId);

    if (mapElement) {
      this.googleMap = new google.maps.Map(mapElement, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    } else {
      console.error("Could not find 'map' element");
    }
  }

  addUserMarker(user : User) : void {
    new google.maps.Marker({
        map: this.googleMap,
        position: {
            lat: user.location.lat,
            lng: user.location.lon
        }
    })
  }

  addCompnayMarker(company : Company) : void {
    new google.maps.Marker({
        map: this.googleMap,
        position: {
            lat: company.location.lat,
            lng: company.location.lon
        }
    })
  }

}


