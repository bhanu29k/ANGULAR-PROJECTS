import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParenntComponentComponent } from './parennt-component/parennt-component.component';
import { AddArticleComponent } from './add-article/add-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ParenntComponentComponent,
    AddArticleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }