import { Component } from '@angular/core';
import { Character } from '../interfaces/db.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  character: Character[] = [
    {
      name: 'Goku',
      strenght: 10000,
    },
    {
      name: 'Vegetta',
      strenght: 7500,
    },
  ];

  new: Character = {
    name: 'Mayinbu',
    strenght: 0,
  };

  addNewCharacter(event: Character){
    this.character.push(event);
  }
}
