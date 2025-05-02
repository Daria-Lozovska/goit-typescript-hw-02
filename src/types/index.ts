export interface Urls {
  small: string;
  regular: string;
}

export interface User {
  name: string;
}

export interface Image {
  id: string;
  urls: Urls;
  alt_description: string;
  user: User;
  likes: number;
}
