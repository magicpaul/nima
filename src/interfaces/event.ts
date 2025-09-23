export interface EventAttributes {
  posts: post[];
}

export interface post {
  title: string;
  image: string;
  subtitle: string;
  slug: string;
  category: string;
  eventDate: string;
  location: string;
  sp1Name: string;
  sp1Img: string;
  sp1Location: string;
  sp2Name: string;
  sp2Img: string;
  sp2Location: string;
  sp3Name: string;
  sp3Img: string;
  sp3Location: string;
  video: string;
  featured: string;
  live: string;
}
