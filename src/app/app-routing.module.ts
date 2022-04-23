import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/unauth/unauth.module').then(m => m.UnauthModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./modules/quotes/quotes.module').then(m => m.QuotesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
