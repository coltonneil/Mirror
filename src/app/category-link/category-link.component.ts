import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './data-categories';

@Component({
  selector: 'app-category-link',
  templateUrl: './category-link.component.html',
  styleUrls: ['./category-link.component.scss']
})
export class CategoryLinkComponent implements OnInit {

  categories = CATEGORIES;

  onSelect(categoryID) {
    console.log(categoryID);
  }

  constructor() { }

  ngOnInit() {
  }

}
