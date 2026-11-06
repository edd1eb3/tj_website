import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { ServicesComponent } from './services/services.component';
import { TelevisionComponent } from './television/television.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'magazines', component: MagazinesComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'television', component: TelevisionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
