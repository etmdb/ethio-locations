import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// other imports...
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoDistanceService } from './geo-distance.service';
import { AddisMapComponent } from './addis-map/addis-map.component';
import { AddisImagesComponent } from './addis-images/addis-images.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddisMapComponent,
    AddisImagesComponent
  ],
  imports: [
    BrowserModule, LeafletModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [GeoDistanceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
