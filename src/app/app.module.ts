import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CreatedPipe } from './created.pipe';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    RepoComponent,
    NavigationBarComponent,
    CreatedPipe,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
