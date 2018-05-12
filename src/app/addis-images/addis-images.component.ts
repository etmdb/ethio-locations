
import { Component, OnInit,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';import { Subject, Observable } from 'rxjs';
import { PHOTOS } from './pic'
import { GeoCoordinate } from "../addis-map/geo-coordinate";

@Component({
  selector: 'app-addis-images',
  templateUrl: './addis-images.component.html',
 

 
})
export class AddisImagesComponent implements OnInit {

  location1: Array <GeoCoordinate>;
  image_data = [
  {
    imageUrl: "http://localhost:4200/assets/images/1.jpg",
    latitude: 9.046543,
    longitude:38.7607747
  },
  {
    imageUrl: "http://localhost:4200/assets/images/2.jpg",
    latitude: 9.0168885,
    longitude:38.7515653
  },
  {
    imageUrl: "http://localhost:4200/assets/images/3.jpg",
    latitude: 9.046543,
    longitude:38.7607747
  },
  {
    imageUrl: "http://localhost:4200/assets/images/4.jpg",
    latitude: 9.0168885,
    longitude:38.7515653
  },
  {
    imageUrl: "http://localhost:4200/assets/images/5.jpg",
    latitude: 9.046543,
    longitude:38.7607747
  },
  {
    imageUrl: "http://localhost:4200/assets/images/6.jpg",
    latitude: 9.0168885,
    longitude:38.7515653
  },
  {
    imageUrl: "http://localhost:4200/assets/images/7.jpg",
    latitude: 9.046543,
    longitude:38.7607747
  },
  {
    imageUrl: "http://localhost:4200/assets/images/8.jpg",
    latitude: 9.0168885,
    longitude:38.7515653
  }
  ];
  

 
   photos = [];
   START = 0;
   TOTAL = 5;
   button$ = new Subject();
   counter$: Observable<any>;
   constructor(private _http: HttpClient) {
     this.counter$ = Observable.merge(
       this.button$
           )
       .startWith(this.START)
       .scan((acc: number, curr: any) => {
         // if next && last image
         if (curr === 1 && acc === this.TOTAL - 1) return 0;
         // if prev && first image
         if (curr === -1 && acc === 0) return this.TOTAL - 1;
         // all other cases
         return acc + curr;
       })
     }

  ngOnInit() {
    let sorted_image_data = this._randomImageUrls(this.image_data, 5);
    for (let image of sorted_image_data) {
      this.photos.push(image.imageUrl);
    }    
    console.log(this.photos);
  }

  //To randomly select images from the image list. The images 
  //are named by number (which should be modified in the future). We 
  //use Knuth Shuffle to randomly select images.
  private _randomImageUrls(myArray,nb_picks){
    for (let i = myArray.length-1; i > 1  ; i--)
    {
        let r = Math.floor(Math.random()*i);
        let t = myArray[i];
        myArray[i] = myArray[r];
        myArray[r] = t;
    }
    return myArray.slice(0,nb_picks);
  }
  
  
}
