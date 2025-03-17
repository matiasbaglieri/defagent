import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ScreenshotsAppComponent } from './screenshots-app/screenshots-app.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ScreenshotsAppComponent],
  imports: [SwiperModule, TranslateModule.forChild()],
  exports: [ScreenshotsAppComponent]
})
export class ScreenshotsModule {}
