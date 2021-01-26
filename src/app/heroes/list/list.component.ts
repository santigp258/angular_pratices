import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  /*   styleUrls: ['./list.component.css'] */
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk'];
  heroEliminated:string = '';

  deleteHero(): void {
    this.heroEliminated = this.heroes.shift() || ''; //This function returns the deleted hero
    console.log(`Hero ${this.heroEliminated} has been eliminated`);
  }
}
