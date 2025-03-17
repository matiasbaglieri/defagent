import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { PricingTwoCardsComponent } from './pricing-two-cards/pricing-two-cards.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PricingCardsComponent, PricingTwoCardsComponent],
  imports: [SharedModule, TranslateModule.forChild()],
  exports: [PricingCardsComponent, PricingTwoCardsComponent]
})
export class PricingModule {}
