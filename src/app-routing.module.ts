import { ListPizzaComponent } from './app/components/list-pizza/list-pizza.component';
import { ListBasketComponent } from './app/components/list-basket/list-basket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: ListPizzaComponent},
    {path: '**', component: ListBasketComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}