export type TLesson = {
  title: string;
  icon?: string;
};

export type TCourseLesson = {
  title: string;
  text: string;
  lessons: TLesson[];
};

export interface ICourse {
  id: string;
  title: string;
  ageGroup: string;
  isAvailable: boolean;
  img: string;
  duration: string;
  course_outline: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  course_price: string;
  lesson: number;
  short_desc: string;
  language: string;
  certificate: string;
  course_desc: string;
  course_desc_2: string;
  learn_list: string[];
  whyThisCourse: string;
  curriculum_desc: string;
  course_lessons: TCourseLesson[];
  meta_desc: string;
}
