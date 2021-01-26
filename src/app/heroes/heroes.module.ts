import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListComponent
    ],
    exports:[
        ListComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}
