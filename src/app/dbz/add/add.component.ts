import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/db.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

@Input() new: Character = {name: 'add', strenght: 5}

/* @Output() onNewCharacter: EventEmitter <Character> = new EventEmitter(); */
constructor(private DbzService: DbzService){
}
add() {
  if (this.new.name.trim().length == 0) {
    return;
  }
  this.DbzService.addCharacter(this.new);
 /*  this.character.push(this.new); */
// console.log(this.new);
/*  this.onNewCharacter.emit(this.new); */
  this.new = {
    name: '',
    strenght: 0,
  }; 
}
}
