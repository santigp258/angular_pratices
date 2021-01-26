import { Component,Input } from '@angular/core';
import { Character } from '../interfaces/db.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  @Input()
  character: Character[] =[]
}
