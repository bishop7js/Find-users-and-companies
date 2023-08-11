import { User } from "./User";
import { Company } from "./Company";

interface mappable {
  location: {
    lat: number;
    lng: number;
  },
  renderInfoContent(): string;
}

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

  addMarker(mappable: mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });


    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.renderInfoContent()
      });

      infoWindow.open(this.googleMap, marker);
    })

  }

}
