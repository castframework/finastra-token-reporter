import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolderComponent } from './holder.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HolderComponent }]),
  ],
  declarations: [HolderComponent],
})
export class HolderModule {}
