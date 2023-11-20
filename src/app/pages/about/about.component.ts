import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  images = [
    {
      url: 'https://scontent.fyyz1-2.fna.fbcdn.net/v/t39.30808-6/397109581_316810584402508_6053710050598077223_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Go1DVkQdYjgAX94APDc&_nc_ht=scontent.fyyz1-2.fna&oh=00_AfCeiJ_E-Qz7aT93OasM8Qe37wCAdzVJtLRVnbAU2FW7tw&oe=656075B9',
      title: 'Image 1',
      cols: 2,
      rows: 2,
    },
    {
      url: 'https://i.pinimg.com/474x/13/30/95/13309504cf9bba7a2481959680c5f079.jpg',
      title: 'Image 2',
      cols: 1,
      rows: 1,
    },
    {
      url: 'https://i.pinimg.com/474x/15/d4/e0/15d4e0d238a84418147c6e211337ae8f.jpg',
      title: 'Image 3',
      cols: 1,
      rows: 1,
    },
    {
      url: 'https://images.unsplash.com/photo-1470091688026-38b51162c8df?dpr=1&auto=compress,format&fit=crop&w=1199&h=750&q=80&cs=tinysrgb&crop=',
      title: 'Image 4',
      cols: 2,
      rows: 1,
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg',
      title: 'Image 5',
      cols: 2,
      rows: 1,
    },
    {
      url: 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/20181122_432d4b7d633e4c65aaf3f1217e98862b-1_2.gif?w=1600',
      title: 'Image 6',
      cols: 2,
      rows: 2,
    },
    {
      url: 'https://i.pinimg.com/474x/c5/61/9b/c5619b4b3d4aa04c0c61d45cb2327d8c.jpg',
      title: 'Image 7',
      cols: 1,
      rows: 2,
    },
    {
      url: 'https://i.pinimg.com/474x/3c/16/48/3c16485de5712d931bd620637b2d3de1.jpg',
      title: 'Image 8',
      cols: 1,
      rows: 1,
    },
    {
      url: 'https://matnepal.com/images/everest1.jpg',
      title: 'Image 9',
      cols: 3,
      rows: 1,
    },
  ];

  titleOpacity = 0;

  showTitle(image: any): void {
    this.titleOpacity = 1;
  }

  hideTitle(): void {
    this.titleOpacity = 0;
  }
}
