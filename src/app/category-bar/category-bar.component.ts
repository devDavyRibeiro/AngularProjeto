import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule,RouterModule,CategoryCardComponent],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent implements OnInit {

  //Declarações
  categories:any = [];
  categorySelected = 0;

  //Construtor
  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    this.categoryService.getList().subscribe({
      next: (response:any) => {
        this.categories = response.categories;
      },
      error: (err:any) =>{

      }
    });
  }

  setCategorySelected(categoryName:number):void{
    this.categorySelected = categoryName;
  }
}
