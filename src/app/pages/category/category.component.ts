import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: { category: string; cate_img: string }[] = [];
  posts: number[] = [12, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];

  ngOnInit(): void {
    this.categories = [
      {
        category: 'category',
        cate_img: 'https://picsum.photos/id/944/900/500',
      },
      { category: 'Samoa', cate_img: 'https://picsum.photos/id/1011/900/500' },
      { category: 'Tonga', cate_img: 'https://picsum.photos/id/984/900/500' },
      {
        category: 'Cook Island',
        cate_img: 'https://picsum.photos/id/944/900/500',
      },
      { category: 'Niue', cate_img: 'https://picsum.photos/id/1011/900/500' },
      {
        category: 'American Samoa',
        cate_img: 'https://picsum.photos/id/984/900/500',
      },
      {
        category: 'category',
        cate_img: 'https://picsum.photos/id/944/900/500',
      },
      { category: 'Samoa', cate_img: 'https://picsum.photos/id/1011/900/500' },
      { category: 'Tonga', cate_img: 'https://picsum.photos/id/984/900/500' },
      {
        category: 'Cook Island',
        cate_img: 'https://picsum.photos/id/944/900/500',
      },
      { category: 'Niue', cate_img: 'https://picsum.photos/id/1011/900/500' },
      {
        category: 'American Samoa',
        cate_img: 'https://picsum.photos/id/984/900/500',
      },
      {
        category: 'American Samoa',
        cate_img: 'https://picsum.photos/id/984/900/500',
      },
    ];
  }
}
