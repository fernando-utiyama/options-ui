import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionPricingComponent } from './option-pricing/option-pricing.component';


const routes: Routes = [
  {path: '', component: OptionPricingComponent},
  {path: 'option', component: OptionPricingComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }