export type TCourse = {
  title: string;
  description: string;
  instructor: string;
  price: number;
  category: string;
  tags: string[];
  thumbnail?: string;
  syllabus: {
    moduleNumber: number;
    title: string;
    videoUrl: string;
  }[];
};
