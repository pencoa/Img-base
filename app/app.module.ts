//our root app component
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageCropperComponent } from 'ng2-img-cropper';

import { CropperComponent } from './cropper.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ CropperComponent, ImageCropperComponent ],
  bootstrap: [ CropperComponent ]
})
export class AppModule {}
