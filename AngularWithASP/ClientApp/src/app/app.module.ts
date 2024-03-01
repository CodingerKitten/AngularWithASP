import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TrackVisibilityDirective } from './components/track-visibility/track-visibility.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { BookRemoveComponent } from './components/book-remove/book-remove.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookFindComponent } from './components/book-find/book-find.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BookListComponent,
    BookAddComponent,
    NavBarComponent,
    BannerComponent,
    TrackVisibilityDirective,
    ProjectsComponent,
    BookRemoveComponent,
    BookEditComponent,
    BookFindComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
