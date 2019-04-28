import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPizzaComponent } from './components/list-pizza/list-pizza.component';
import { DetailPizzaComponent } from './components/detail-pizza/detail-pizza.component';
import { DetailCommandComponent } from './components/detail-command/detail-command.component';
import { ListCommandComponent } from './components/list-command/list-command.component';
import { ValidCommandComponent } from './components/valid-command/valid-command.component';
import { ValidBasketComponent } from './components/valid-basket/valid-basket.component';
import { ListBasketComponent } from './components/list-basket/list-basket.component';
import { DetailBasketComponent } from './components/detail-basket/detail-basket.component';
import { AddPizzaComponent } from './components/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './components/edit-pizza/edit-pizza.component';
import { NewPizzaComponent } from './components/new-pizza/new-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    NavbarComponent,
    ListPizzaComponent,
    DetailPizzaComponent,
    DetailCommandComponent,
    ListCommandComponent,
    ValidCommandComponent,
    ValidBasketComponent,
    ListBasketComponent,
    DetailBasketComponent,
    AddPizzaComponent,
    EditPizzaComponent,
    NewPizzaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
