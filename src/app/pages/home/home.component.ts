import { Component, ElementRef } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorService } from './paginator.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images: { category: string; cate_img: string }[] = [];
  responsiveOptions;

  constructor(
    private paginatorService: PaginatorService,
    private el: ElementRef
  ) {
    this.setPage(1);
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 5,
      },
      {
        breakpoint: '992px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '550px',
        numVisible: 2,
        numScroll: 2,
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
      {
        category: 'American Samoa',
        cate_img: 'https://picsum.photos/id/984/900/500',
      },
    ];
  }

  items: number[] = [12, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
  dummyItems: number[] = Array.from(
    { length: this.items.length },
    (_, i) => i + 1
  );
  pager: any = {};
  totalCount: number = this.items.length;
  limit: number = 6;

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.paginatorService.paginate(
      this.totalCount,
      page,
      this.limit
    );
    this.items = this.dummyItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    const scrollTarget = this.el.nativeElement.querySelector('#scrollTarget');
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
