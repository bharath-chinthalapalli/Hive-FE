import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
 