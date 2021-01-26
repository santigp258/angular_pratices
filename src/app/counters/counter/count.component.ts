import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
    <h1>{{ title }}</h1>
    <span
      >La base es <strong>{{ base }}</strong></span
    ><br />

    <button (click)="acumulator(base)">+{{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="acumulator(-base)">-{{ base }}</button>
  `,
    styleUrls: ['../../app.component.css'],
})
export class CountComponent {
  title: string = 'firstApp';
  number: number = 4;
  object = [
    { name: 'clark', edad: 15 },
    { name: 'emanuel', edad: 30 },
  ];
  base: number = 5;

  acumulator(value: number) {
    return (this.number += value);
  }
}
