import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ethio Locations Game';
  options = {
	layers: [
		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
			{ 
				maxZoom: 18, 
				attribution: '...' 
			})
			],
		zoom: 12,
		center: L.latLng(8.879966, 38.726909)
};

onMapReady(map: L.Map) {
    map.on('click', 
    	<LeafletMouseEvent>(e) => 
    	{ 
    		console.log(e.latlng); 
        this.title = e.latlng;
    	});
  }
}
