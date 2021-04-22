import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalizerService {

  constructor() { }

  analyze( tokens: Array<string>) {
    console.log(tokens);
  }
}
