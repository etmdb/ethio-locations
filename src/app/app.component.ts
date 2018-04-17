import { Component, NgZone } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import * as L from 'leaflet';
import { GeoDistanceService } from './geo-distance.service';
import { GeoCoordinate } from "./geo-coordinate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	zone: any;
	geoDistanceService: any;
	items: Array<any> = []
	title = 'Ethio Locations Game';
	lat = null;
	lang = null;
  distance = null;
	map_layers: L.Layer[] = [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
	{ 
		maxZoom: 18, 
		attribution: '.' 
	})];
  options = {
	layers: this.map_layers,
		zoom: 12,
		center: L.latLng(8.879966, 38.726909)
	}
		constructor() {
			this.items = [
      { name: 'assets/images/' },
      { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
			{ name: 'assets/images/3.jpg' },
			{ name: 'assets/images/4.jpg' },
			{ name: 'assets/images/5.jpg' },
			{ name: 'assets/images/6.jpg' },
			{ name: 'assets/images/7.jpg' },
			{ name: 'assets/images/8.jpg' },
			{ name: 'assets/images/1.jpg' },
			{ name: 'assets/images/2.jpg' },
			{ name: 'assets/images/3.jpg' },
    ]
		}
	

//onMapReady(map: L.Map) {
	//map.on('click',
		//<LeafletMouseEvent>(e) => {

			//let c = L.marker([e.latlng.lat, e.latlng.lng], {
				//icon: L.icon({
					//iconSize: [25, 41],
					//iconAnchor: [13, 41],

				///	iconUrl: 'assets/download2.png',
					//shadowUrl: 'assets/download.png'		
			//	})



		//	});
	//		this.zone.run(() => {

		//		let location1: GeoCoordinate = {
			//		latitude: 8.879966,
				//	longitude: 38.726909
			//	};


		//		this.lat = e.latlng.lat;
		//		this.lang = e.latlng.lng;

			//	let location2: GeoCoordinate = {
				//	latitude: this.lat,
			//		longitude: this.lang
			//	};

			//	this.distance = this.geoDistanceService.getDistanceInKilometers(location1, location2);

			//});
			//c.addTo(map);
		//});
 }
