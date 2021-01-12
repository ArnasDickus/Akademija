export type CategoriesType = {
  id: string;
  title: string;
  url: string;
  courses: CoursesType[];
};

export type CoursesType = {
  id?: string;
  title: string;
  about: string;
  description: string;
  img: string;
  url: string;
  sections: CourseSectionType[];
};

export type CourseSectionType = {
  id: string;
  title: string;
  oldId?: string;
  lessons: LessonsType[];
  tests?: TestsType[];
};

export type LessonsType = {
  id?: string;
  title: string;
  url: string;
};

export type TestsType = {
  id: string;
  title: string;
  url: string;
};
