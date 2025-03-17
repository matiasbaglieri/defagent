import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { ActionsModule } from '@app/blocks/actions/actions.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactOtherChannelsComponent } from './components/contact-other-channels/contact-other-channels.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactOtherChannelsComponent
  ],
  imports: [
    SharedModule,
    FootersModule,
    ActionsModule,
    ContactRoutingModule,
    TranslateModule.forChild()
  ]
})
export class ContactModule {}
