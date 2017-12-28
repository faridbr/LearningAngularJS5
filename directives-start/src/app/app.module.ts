import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './directives/basic-hightlight.directive';
import { BetterHightlightDirective } from './directives/better-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
