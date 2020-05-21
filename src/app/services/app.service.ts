import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {}

    async getImage(search) {
      let response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=odFQLEFCf0Ekz1NNWShVa2a4mhQW1Gmm&limit=36`);
      let data = await response.json();
      return data;
    }
}
