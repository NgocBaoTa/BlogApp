export interface Author {
    id: string;
    username: string;
    email: string;
    password: string;
    userType: string;
    description: string;
    avatar: string;
    reviewingPosts: Array<string>;
    notifications: Array<string>;
    posts: Array<string>;
    facebook: string;
    instagram: string;
    phone: string;
    youtube: string;
    quote: string;
}