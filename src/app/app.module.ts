import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HorizontalPostCardComponent } from './components/horizontal-post-card/horizontal-post-card.component';
import { PopularPostCardComponent } from './components/popular-post-card/popular-post-card.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcribeFormComponent } from './components/subcribe-form/subcribe-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AuthorComponent } from './pages/author/author.component';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostCardComponent,
    HorizontalPostCardComponent,
    PopularPostCardComponent,
    CategoryComponent,
    SubcribeFormComponent,
    CategoryListComponent,
    AuthorComponent,
    AuthorCardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
