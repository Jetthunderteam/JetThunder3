import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from "@angular/material";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Angulartics2Module} from "angulartics2";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {Angulartics2GoogleAnalytics} from "angulartics2/src/providers/angulartics2-google-analytics";
import {DataStoreService} from "./api/data-store.service";
import {BlogService} from "./core/data-services/blog.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    NgbModule.forRoot(),
    Angulartics2Module.forRoot(),
    InMemoryWebApiModule.forRoot(DataStoreService)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    Angulartics2GoogleAnalytics,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
