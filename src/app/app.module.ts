import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

// other imports...
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoDistanceService } from './addis-map/geo-distance.service';
import { AddisImageService } from './addis-images/addis-image.service';
import { AddisMapComponent } from './addis-map/addis-map.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =[
{ path: 'home', component: HomeComponent },
{ path: 'addis-map', component: AddisMapComponent },
{ path: '', redirectTo: '/home',pathMatch: 'full' },
{ path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    
    AppComponent,
    AddisMapComponent,
    HomeComponent,
    ErrorComponent,
 

  ],
  imports: [
    CommonModule,
    BrowserModule, 
    LeafletModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  
  providers: [GeoDistanceService, AddisImageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
