export interface AudioAttributes {
  audio_title: string;
  audio_description: string;
  speakers: Speaker[];
  books: Book[];
  posts: Post[];
}

export interface Speaker {
  name: string;
}

export interface Book {
  name: string;
}

export interface Post {
  title: string;
  image: string;
  subtitle: string;
  book: string;
  speaker: string;
  slug: string;
  embed: string;
}
