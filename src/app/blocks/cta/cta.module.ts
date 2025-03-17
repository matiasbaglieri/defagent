import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cta1Component } from './cta1/cta1.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Cta1Component],
  imports: [RouterModule, TranslateModule.forChild()],
  exports: [Cta1Component]
})
export class CtaModule {}
