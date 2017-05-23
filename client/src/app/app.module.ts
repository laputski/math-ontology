import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule,MdButtonModule, MdCheckboxModule} from '@angular/material';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { GraphComponent } from './graph/graph.component';
import { LatexComponent } from './latex/latex.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'latex', component: LatexComponent },
  { path: 'about',      component: AboutComponent },
  {
    path: 'graph',
    component: GraphComponent
  },
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    GraphComponent,
    LatexComponent,
    AboutComponent
  ],
  imports: [
     RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,MdButtonModule, MdCheckboxModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
