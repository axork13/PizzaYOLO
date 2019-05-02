import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  constructor(public pizzaService: PizzaService) { }

  ngOnInit() {
  }

}
