export interface BlogPost {
  title: string;
  date: string;
  author: string;
  content: string;
  slug: string;
  readingTime: string;
}

export interface Video {
  title: string;
  url: string;
  description: string;
}

export interface FunFact {
  id: number;
  content: string;
}
