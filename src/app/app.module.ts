import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import bootstrap from 'bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Ng5SliderModule } from 'ng5-slider';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { SubhomeComponent } from './subhome/subhome.component';
import { SublinkComponent } from './sublink/sublink.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SubhomeComponent,
    SublinkComponent
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    UiSwitchModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
