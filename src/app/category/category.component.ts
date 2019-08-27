import { Component, OnInit } from '@angular/core';
import { Categories } from './category';
import { CategoryService} from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [ CategoryService ]
})
export class CategoryComponent implements OnInit {
  category: Categories[];
  title = 'Kategori Listesi';
  constructor(private categoryService: CategoryService) { }




  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {this.category = data; });

  }

}
