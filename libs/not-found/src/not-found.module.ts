import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: NotFoundComponent }])],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
