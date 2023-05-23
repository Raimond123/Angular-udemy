import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: "Krilin",
    power: 1000
},{
  name: 'Goku',
  power: 10000
},{
  name: "Nappa",
  power: 8000
}]
}
