import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { AnimalComponent } from './animal/animal.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
const appRoutes:Routes=[
{path:'dogs',component:DogComponent},
{path:'cats',component:CatComponent},
{path:'animal',component:AnimalComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
