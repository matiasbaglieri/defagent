import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Footer1Component, Footer2Component],
  imports: [SharedModule, RouterModule, TranslateModule.forChild()],
  exports: [Footer1Component, Footer2Component]
})
export class FootersModule {}
