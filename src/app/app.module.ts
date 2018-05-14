import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// other imports...
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoDistanceService } from './addis-map/geo-distance.service';
import { AddisImageService } from './addis-images/addis-image.service';
import { AddisMapComponent } from './addis-map/addis-map.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddisMapComponent
  ],
  imports: [
    BrowserModule, 
    LeafletModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    NgbModule.forRoot()
  ],
  providers: [GeoDistanceService, AddisImageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
