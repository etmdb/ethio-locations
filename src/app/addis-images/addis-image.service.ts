import { Injectable } from '@angular/core';
import {image_data} from './pic';
import { GeoCoordinate } from "../addis-map/geo-coordinate";

@Injectable()
export class AddisImageService {
	//each picture geo coordinate will be assigned with geocoordinate format
  	//then pushed into answer_coordinate array
	coordinate : GeoCoordinate = {
		latitude: 0,
		longitude: 0
	};
	
	//randomly selected photo url array will be assigned in this varriable
  	photos = [];
  	answer_coordinates: Array <GeoCoordinate> = [];
	

	constructor() { }

  
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


  //To return the sorted out pictures and their corresponding
  //coordinates
  selectRandomImages(){
  	 this.answer_coordinates = [];
  	 this.photos= [];	
  		

  	//We will have 5 questions for now, so we will pick 5 images from our
  	//picture collection.
  	let sorted_image_data = this._randomImageUrls(image_data, 5);
  	

    for (let image of sorted_image_data) {
      this.photos.push(image.imageUrl);
      this.coordinate.latitude = image.latitude;
      this.coordinate.longitude = image.longitude;
      this.answer_coordinates.push(this.coordinate);
    }

    
    return { 
    	photos: this.photos, 
    	coordinates: this.answer_coordinates      
    }

  }

  imageC(){
  	return true;
  }
}