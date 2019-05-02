import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPizzaComponent } from './components/list-pizza/list-pizza.component';
import { DetailPizzaComponent } from './components/detail-pizza/detail-pizza.component';
import { ValidBasketComponent } from './components/valid-basket/valid-basket.component';
import { ListBasketComponent } from './components/list-basket/list-basket.component';
import { DetailBasketComponent } from './components/detail-basket/detail-basket.component';
import { EditPizzaComponent } from './components/edit-pizza/edit-pizza.component';
import { NewPizzaComponent } from './components/new-pizza/new-pizza.component';
import { PizzaService } from './services/pizza.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    NavbarComponent,
    ListPizzaComponent,
    DetailPizzaComponent,
    ValidBasketComponent,
    ListBasketComponent,
    DetailBasketComponent,
    EditPizzaComponent,
    NewPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
