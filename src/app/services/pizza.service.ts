import { Injectable } from '@angular/core';
import { Pizza } from '../classes/pizza';

import * as PizzaData from '../../data.json';
import * as _ from 'lodash';
import { IIngredient } from '../interfaces/ingredient';

@Injectable()
export class PizzaService {

  private pizzas: Pizza[] = [];

  constructor() {
     (<any>PizzaData).pizzas.forEach(pizza => {
       this.pizzas.push(new Pizza(pizza));
     });
  }

  public createPizza(name: string, imageUrl: string, ingredients: IIngredient[], toppings: string[], prices: number[]) {
    const newPizzaData = {
      id: this.getNextId(),
      name,
      imageUrl,
      ingredients: [...ingredients],
      toppings: [...toppings],
      prices: [...prices]
    }

    const newPizza = new Pizza(newPizzaData);

    this.pizzas.push(newPizza);
    return newPizza;
  }

  public getPizzas(): Pizza[] {
    return this.pizzas;
  }

  public getPizzaById(id: number): Pizza {
    return _.find(this.pizzas, (pizza) => pizza.id === id);
  }

  private getNextId(): number {
    const max = _.maxBy(this.pizzas, (pizza) => pizza.id);
    return max.id + 1;
  }
}
