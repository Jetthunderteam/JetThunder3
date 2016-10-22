import {InMemoryDbService} from "angular-in-memory-web-api";
export class DataStoreService implements InMemoryDbService {
  createDb() {
    let blog = [
      {
        "id": 1,
        "photo": "cornwallFlight.png",
        "content": "",
        "date": "April 2016",
        "subTitle": "",
        "tags": ["Flying", "Lifestyle"],
        "title": "Trip to Cornwall",
        "url": ""
      }, {
        "id": 2,
        "photo": "comptonFlight.png",
        "content": "",
        "date": "May 2016",
        "subTitle": "",
        "tags": ["Flying", "Lifestyle"],
        "title": "Flight to Compton",
        "url": ""
      }, {
        "id": 3,
        "photo": "newMazda.png",
        "content": "",
        "date": "June 2016",
        "subTitle": "",
        "tags": ["Lifestyle", "Motoring"],
        "title": "Mazda RX8",
        "url": ""
      }, {
        "id": 4,
        "photo": "raspberryPi.png",
        "content": "",
        "date": "September 2016",
        "subTitle": "",
        "tags": ["Lifestyle", "Technology"],
        "title": "Raspberry Pi",
        "url": ""
      }
    ];

    return {blog};
  }
}
