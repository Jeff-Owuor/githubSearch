import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SearchRoutingModule } from './search/search-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RepoHighlightDirective } from './repo-highlight.directive';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchResultsComponent,
    RepoHighlightDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SearchRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
