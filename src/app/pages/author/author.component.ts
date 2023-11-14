import { Component } from '@angular/core';
import { Author } from './author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  authors: Author[] = [];

  ngOnInit(): void {
    this.authors = [
      {
        id: '1',
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'password123',
        userType: 'user',
        description:
          'Jane Smith is a seasoned writer and editor with a passion for storytelling. She has a knack for bringing ideas to life through the written word. With years of experience in the publishing industry, Jane has worked on a diverse range of projects, from investigative journalism to creating compelling marketing content.',
        avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
        reviewingPosts: ['post1', 'post2'],
        notifications: ['notification1', 'notification2'],
        posts: ['post3', 'post4'],
        facebook: 'https://www.facebook.com/johndoe',
        instagram: 'https://www.instagram.com/johndoe',
        phone: '+1234567890',
        youtube: 'https://www.youtube.com/watch',
        quote: 'We write to taste life twice, in the moment and in retrospect.',
      },
      {
        id: '2',
        username: 'jane_smith',
        email: 'jane_smith@example.com',
        password: 'strongPassword123',
        userType: 'user',
        description:
          'Jane Smith is a seasoned writer and editor with a passion for storytelling. She has a knack for bringing ideas to life through the written word. With years of experience in the publishing industry, Jane has worked on a diverse range of projects, from investigative journalism to creating compelling marketing content.',
        avatar: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
        reviewingPosts: ['post9', 'post10'],
        notifications: ['notification3', 'notification4', 'notification5'],
        posts: ['post11', 'post12', 'post13', 'post14'],
        facebook: 'https://www.facebook.com/jane_smith',
        instagram: 'https://www.instagram.com/jane_smith',
        phone: '9876543210',
        youtube: 'https://www.youtube.com/watch',
        quote: 'We write to taste life twice, in the moment and in retrospect.',
      },
    ];
  }
}
