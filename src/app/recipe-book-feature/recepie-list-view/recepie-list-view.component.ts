import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recepie-list-view',
  templateUrl: './recepie-list-view.component.html',
  styleUrls: ['./recepie-list-view.component.css']
})
export class RecepieListViewComponent implements OnInit {

  recipes: Recipe[] = [
   new Recipe('A test Recipe', 'This is a test', "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg"),
   new Recipe('A test Recipe', 'This is a test', "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg")

  ];
  constructor() { }

  ngOnInit() {
  }

}
