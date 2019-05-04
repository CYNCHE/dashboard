import { NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class CoreModule {

  constructor(@SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule already exists.');
    }
  }

}
