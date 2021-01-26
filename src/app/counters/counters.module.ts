import { NgModule } from '@angular/core';
import { CountComponent } from './counter/count.component';

@NgModule({
    declarations: [
        CountComponent
    ],
    exports: [
        CountComponent
    ]
})

export class CountersModule{

}