import { JediDetailsComponent } from './jedi-details/jedi-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Routes, RouterModule }  from '@angular/router';
import { JediComponent } from './jedi/jedi.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule, MatIconModule} from '@angular/material';
import { JediUpdateComponent } from './jedi-update/jedi-update.component';

const appRoutes: Routes = [
  {
        path: '',
        redirectTo: '/jedi',
        pathMatch: 'full'
    },
    {
        path: 'jedi',
        component: JediComponent
    },
    {
        path: 'jedi-details/:name',
        component: JediDetailsComponent
    },
    {
        path: 'jedi-update/:name',
        component: JediUpdateComponent
    },
    { 
    	path: '**',
    	redirectTo: '/jedi',
        pathMatch: 'full'
    }];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    JediComponent,
    JediDetailsComponent,
    JediUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }