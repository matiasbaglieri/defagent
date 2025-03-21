import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared';

import { Faqs1Component } from './faqs1/faqs1.component';
import { FaqsService } from './services/faqs.service';
import { FaqsAccordionComponent } from './faqs-accordion/faqs-accordion.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Faqs1Component, FaqsAccordionComponent],
  providers: [FaqsService],
  imports: [SharedModule, NgbAccordionModule, TranslateModule.forChild()],
  exports: [Faqs1Component, FaqsAccordionComponent]
})
export class FaqsModule {}
