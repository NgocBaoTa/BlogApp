import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  @Input() images: { category: string; cate_img: string }[] = [];
  @Input() responsiveOptions: any;
}
