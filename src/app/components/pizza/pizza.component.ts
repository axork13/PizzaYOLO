import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/classes/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  @Input() id;
  pizza: Pizza;

  
  constructor(private maRoute: ActivatedRoute, public pizzaService: PizzaService) { }

  ngOnInit() {
    this.maRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.pizza = new Pizza(this.pizzaService.getPizzaById(this.id));
    })
  }

}
