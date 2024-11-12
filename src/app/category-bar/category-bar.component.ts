import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent implements OnInit {

  //Declarações
  categories:any = [];

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
}
