import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list-feature',
  templateUrl: './shopping-list-feature.component.html',
  styleUrls: ['./shopping-list-feature.component.css']
})
export class ShoppingListFeatureComponent implements OnInit {

  Ingredients: Ingredient[] = [new Ingredient('Apples',4), new Ingredient('Tomatoes',6)];
  constructor() { }

  ngOnInit() {
  }

}
