import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input () category:any;
  @Output() selectCategoryEvent = new EventEmitter<number>();

  changeCategorySelected() : void{
    this.selectCategoryEvent.emit(this.category.id);
  }
}
