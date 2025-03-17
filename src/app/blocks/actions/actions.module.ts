import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormRegisterSimpleInlineComponent } from './form-register-simple-inline/form-register-simple-inline.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormRegisterCompanyComponent } from './form-register-company/form-register-company.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FormRegisterSimpleInlineComponent,
    FormContactComponent,
    FormRegisterCompanyComponent
  ],
  imports: [CommonModule, FormsModule, TranslateModule.forChild()],
  exports: [
    FormRegisterSimpleInlineComponent,
    FormContactComponent,
    FormRegisterCompanyComponent
  ]
})
export class ActionsModule {}
