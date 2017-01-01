import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    UPLOAD_DIRECTIVES
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
