import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalSearchModule } from '@finastra/cdk/global-search';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeComponent }]),
    GlobalSearchModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
