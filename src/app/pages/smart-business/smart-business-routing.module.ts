import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SmartBusinessComponent } from './components/smart-business/smart-business.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: SmartBusinessComponent,
    data: { title: extract('EveryThink - Perfect toolbox for your bussines') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartBusinessRoutingModule {}
