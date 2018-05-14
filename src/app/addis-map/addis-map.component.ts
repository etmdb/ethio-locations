//import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClient } from '@angular/common/http';


import { Subject, Observable } from 'rxjs';

import * as L from 'leaflet';
import { GeoDistanceService } from './geo-distance.service';
import { GeoCoordinate } from "./geo-coordinate";
import { Component, NgZone } from '@angular/core';
import { AddisImageService } from '../addis-images/addis-image.service';

@Component({
  selector: 'app-addis-map',
  templateUrl: './addis-map.component.html',
  styleUrls: ['./addis-map.component.css']
})
export class AddisMapComponent{

  title = 'Ethio Locations Game';
  lat = null;
  lang = null;
  distance = null;
  distanceInKillometer = 0;
  distanceInMiles = null;
  Point = 0;
  total_point = 0;
  note = 'developers';

  

  map_layers: L.Layer[] = [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 18,
      attribution: '.'
    })];
  options = {
    layers: this.map_layers,
    zoom: 12,
    center: L.latLng(8.879966, 38.726909)
  };

  show_next = false;
  START = 0; //Image start
  TOTAL = 5; //Image end
  button$ = new Subject();
  counter$: Observable<any>;

  photos = [];
  answers: Array<GeoCoordinate>;

  constructor(private zone: NgZone, _http: HttpClient, private geoDistanceService: GeoDistanceService, private addisImageService: AddisImageService) {
     this.counter$ = Observable.merge(
       this.button$
           )
       .startWith(this.START)
       .scan((acc: number, curr: any) => {
          this.show_next = false;
          let location1: GeoCoordinate = {
            latitude: this.lat,
            longitude: this.lang
          };
          this.distance = this.geoDistanceService.getDistanceInKilometers(location1, this.answers[acc]);
          this.Point = this.geoDistanceService.getPoint(this.distanceInKillometer);
          this.total_point = this.total_point + this.Point;
         // if next && last image
         if (curr === 1 && acc === this.TOTAL - 1) return 0;
         // if prev && first image
         if (curr === -1 && acc === 0) return this.TOTAL - 1;
         // all other cases
         return acc + curr;
       })

  
  }


  ngOnInit() {
    let imageService = this.addisImageService.selectRandomImages();
    this.photos = imageService.photos;
    this.answers = imageService.coordinates;
  }


   //--------------MAP ------//
  //On map ready
  onMapReady(map: L.Map) {
    let c = null;
    map.on('click',
      <LeafletMouseEvent>(e) => {

        //show the next button
        this.show_next = true;
        
        //remove previous markers 
         if(c !== null){
          map.removeLayer(c);
         }
          c =L.marker([e.latlng.lat, e.latlng.lng], {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],

            iconUrl: 'assets/download2.png',
            //shadowUrl: 'assets/download.png'		
          })

        });
       
        this.zone.run(() => {

          this.lat = e.latlng.lat;
          this.lang = e.latlng.lng;

          /*let location1: GeoCoordinate = {
            latitude: 8.879966,
            longitude: 38.726909
          };

          this.lat = e.latlng.lat;
          this.lang = e.latlng.lng;

          let location2: GeoCoordinate = {
            latitude: this.lat,
            longitude: this.lang
          };

          this.distance = this.geoDistanceService.getDistanceInKilometers(location1, location2);

          this.distanceInKillometer = this.geoDistanceService.getDistanceInKilometers(location1, location2);
          this.distanceInMiles = this.geoDistanceService.getDistanceInMiles(location1, location2);
          this.Point = this.geoDistanceService.getPoint(this.distanceInKillometer);
          this.note = this.geoDistanceService.developers();*/

        });
        c.addTo(map);
      });



  }


// ----------------------------IMAGES---------------------------//
   
  
}
