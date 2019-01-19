import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LottoComponent } from './lotto/lotto.component';

const routes: Routes = [
  { path: '', redirectTo: 'lotto', pathMatch: 'full' },
  { path: 'lotto', component: LottoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
