import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/db.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

@Input() new: Character = {name: 'add', strenght: 5}
@Input() character:Character[] = []

add() {
  if (this.new.name.trim().length == 0) {
    return;
  }
  this.character.push(this.new);
  this.new = {
    name: '',
    strenght: 0,
  }; 
}
}
