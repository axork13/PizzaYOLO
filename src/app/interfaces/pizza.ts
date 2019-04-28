import { IIngredient } from './ingredient';

export interface IPizza {
    id: number;
    name: string;
    imageUrl: string;
    ingredients: IIngredient[];
    toppings: string[];
    prices: number[];
}
