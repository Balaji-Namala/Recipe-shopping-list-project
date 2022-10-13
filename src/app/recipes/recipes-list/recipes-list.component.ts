import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'Involved in it','https://myfoodbook.com.au/sites/default/files/category_image/Dinner_Recipes.jpg'),
    new Recipe('a test recipe', 'Test','https://myfoodbook.com.au/sites/default/files/category_image/Dinner_Recipes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
