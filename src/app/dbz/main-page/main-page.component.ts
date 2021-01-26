import { Component } from '@angular/core';
import { Character } from '../interfaces/db.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  new: Character = {
    name: 'Mayinbu',
    strenght: 0,
  };

  constructor(){
  }
}
