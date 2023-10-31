import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images: { category: string; cate_img: string }[] = [];
  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.images = [
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
    ];
  }
}
