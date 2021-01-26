import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['../../app.component.css'],
  })
export class HeroeComponent{
    name: string = 'Iroman';
    age: number = 20;

    get CapitalizedName():string{
      return this.name.toUpperCase();
    }

    getName():string{
      return `${this.name} - ${this.age} `
    }

    changeName():void{
      this.name = 'spiderman';
    }

    changeAge():void{
      this.age = 30;
    }
}