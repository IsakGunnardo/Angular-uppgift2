import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfileComponent } from './views/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { NewpostComponent } from './views/newpost/newpost.component';
import { ThememodalComponent } from './components/thememodal/thememodal.component';
import { SidemodalComponent } from './components/sidemodal/sidemodal.component';
import { HomeComponent } from './views/home/home.component';
import { BloggComponent } from './views/blogg/blogg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    NewpostComponent,
    ThememodalComponent,
    SidemodalComponent,
    HomeComponent,
    BloggComponent,
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
