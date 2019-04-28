import { IPizza } from '../interfaces/pizza';
import { IIngredient } from '../interfaces/ingredient';

export class Pizza implements IPizza {
    id: number;
    name: string;
    imageUrl: string;
    ingredients: IIngredient[];
    toppings: string[];
    prices: number[];

    constructor({id, name, imageUrl, ingredients, toppings, prices}) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.toppings = toppings;
        this.prices = prices;
    }
}
