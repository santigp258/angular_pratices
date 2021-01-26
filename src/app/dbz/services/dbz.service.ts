import { Injectable } from '@angular/core';
import { Character } from '../interfaces/db.interface';

@Injectable()
export class DbzService {
  private _character: Character[] = [
    {
      name: 'Goku',
      strenght: 10000,
    },
    {
      name: 'Vegetta',
      strenght: 7500,
    },
  ];

  get characters(): Character[] {
    return [...this._character];
  }

  constructor() {}

  addCharacter(character: Character) {
      this._character.push(character);
  }
}
