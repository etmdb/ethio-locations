import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// other imports...
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoDistanceService } from './geo-distance.service';
import { AddisMapComponent } from './addis-map/addis-map.component';
import { AddisImagesComponent } from './addis-images/addis-images.component';

@NgModule({
  declarations: [
    AppComponent,
    AddisMapComponent,
    AddisImagesComponent
  ],
  imports: [
    BrowserModule, LeafletModule
  ],
  providers: [GeoDistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
