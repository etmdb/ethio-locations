
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-addis-images',
  templateUrl: './addis-images.component.html',
 
})
export class AddisImagesComponent implements OnInit {

  images: Array<string>;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('http://localhost:4200/assets/Addis-Pictures.json')
      .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
      .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
    return [1, 2, 3, 4, 5].map(() => {
      const randomId = images[Math.floor(Math.random() * 8) + 1].id;
      //  console.log(`http://localhost:4200/assets/images/${randomId}.jpg`);
      return `http://localhost:4200/assets/images/${randomId}.jpg`;
    });
  }

}
