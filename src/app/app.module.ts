import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FilerPipe } from './share/filer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FilterComponent,
    FooterComponent,
    PrefooterComponent,
    HeaderComponent,
    MenuComponent,
    FilerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
