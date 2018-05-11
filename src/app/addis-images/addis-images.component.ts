
import { Component, OnInit,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';import { Subject, Observable } from 'rxjs';
import { PHOTOS } from './pic'


@Component({
  selector: 'app-addis-images',
  templateUrl: './addis-images.component.html',
  template: `
  <img src="{{photos[(counter$ | async)]}}">

  <button (click)="button$.next(-1)">Prev</button>
  <button (click)="button$.next(1)">Next</button>

  
  <button (click)="button$.next(1)">submit</button>
`,
 
})
export class AddisImagesComponent implements OnInit {

  images: Array<string>;

 
   photos = PHOTOS;
   START = 0;
   TOTAL = PHOTOS.length;
   button$ = new Subject();
   counter$: Observable<any>;
   constructor(private _http: HttpClient) {
     this.counter$ = Observable.merge(
       this.button$,
       Observable.interval(5000).mapTo(1)
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
    this._http.get('http://localhost:4200/assets/Addis-Pictures.json')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3, 4, 5 ,6 ,7 ,8].map(() => {
      const randomId = images[Math.floor(Math.random() * 8) + 1].id;
      //  console.log(`http://localhost:4200/assets/images/${randomId}.jpg`);
      return `http://localhost:4200/assets/images/${randomId}.jpg`;
    });
  }
  
  
}
