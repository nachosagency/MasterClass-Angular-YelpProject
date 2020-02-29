import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsPageComponent } from './hotels-page/hotels-page.component';
import { VoituresPageComponent } from './voitures-page/voitures-page.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'hotels', component: HotelsPageComponent },
  { path: 'voitures', component: VoituresPageComponent },
  { path: 'restaurants', component: RestaurantsPageComponent },
  { path: '**', redirectTo: '/restaurants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
