import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CoreModule } from './core/core.modules';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      CoreModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
