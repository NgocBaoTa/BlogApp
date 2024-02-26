import { Component } from '@angular/core';
import { Category } from './category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  // categories$ = this.categoryService.getCategory();
  categories$: Category[] = [];
  posts: number[] = [12, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    // this.categories$.subscribe(
    //   (data) => {
    //     console.log('Categories:', data);
    //   },
    //   (error) => {
    //     console.error('Error fetching categories', error);
    //   }
    // );

    this.categoryService.getCategory().subscribe(
      (data) => {
        this.categories$ = data.map((category) => ({
          categoryID: category[0],
          categoryName: category[1],
          categoryImage: category[2],
          createdAt: new Date(category[3]),
          updatedAt: new Date(category[4]),
        }));
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );



    // this.categories = [
    //   {
    //     category: 'category',
    //     cate_img: 'https://picsum.photos/id/944/900/500',
    //   },
    //   { category: 'Samoa', cate_img: 'https://picsum.photos/id/1011/900/500' },
    //   { category: 'Tonga', cate_img: 'https://picsum.photos/id/984/900/500' },
    //   {
    //     category: 'Cook Island',
    //     cate_img: 'https://picsum.photos/id/944/900/500',
    //   },
    //   { category: 'Niue', cate_img: 'https://picsum.photos/id/1011/900/500' },
    //   {
    //     category: 'American Samoa',
    //     cate_img: 'https://picsum.photos/id/984/900/500',
    //   },
    //   {
    //     category: 'category',
    //     cate_img: 'https://picsum.photos/id/944/900/500',
    //   },
    //   { category: 'Samoa', cate_img: 'https://picsum.photos/id/1011/900/500' },
    //   { category: 'Tonga', cate_img: 'https://picsum.photos/id/984/900/500' },
    //   {
    //     category: 'Cook Island',
    //     cate_img: 'https://picsum.photos/id/944/900/500',
    //   },
    //   { category: 'Niue', cate_img: 'https://picsum.photos/id/1011/900/500' },
    //   {
    //     category: 'American Samoa',
    //     cate_img: 'https://picsum.photos/id/984/900/500',
    //   },
    //   {
    //     category: 'American Samoa',
    //     cate_img: 'https://picsum.photos/id/984/900/500',
    //   },
    // ];
  }
}
