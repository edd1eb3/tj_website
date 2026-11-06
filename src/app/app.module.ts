import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { ServicesComponent } from './services/services.component';
import { TelevisionComponent } from './television/television.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BooksComponent,
    ContactComponent,
    MagazinesComponent,
    NewsroomComponent,
    ServicesComponent,
    TelevisionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
