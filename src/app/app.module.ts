import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { AcceuilComponent } from './components/pages/acceuil/acceuil.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
    { path: '', component: AcceuilComponent },
    { path: 'home', component: AcceuilComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: AcceuilComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
	ToastrModule.forRoot({preventDuplicates: true, closeButton: true, timeOut: 10000, positionClass: 'toast-top-right'}),    
	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
