import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './data-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;

  onSelect(categoryID) {
    console.log(categoryID);
  }

  constructor() { }

  ngOnInit() {
  }

}
