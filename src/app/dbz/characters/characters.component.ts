import { Component,Input } from '@angular/core';
import { Character } from '../interfaces/db.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

/*   @Input()
  character: Character[] =[] */

  get characters(){
    return this.DbzService.characters;
  }

  constructor(private DbzService: DbzService){}
}
