export interface CategoriesInterface {
    id: string;
    title: string;
    url: string;
    courses: CoursesInterface[];
}

export interface CoursesInterface {
    id?: string;
    title: string;
    description: string;
    img: string;
    url: string;
    sections: CourseSectionInterface[];
}


export interface CourseSectionInterface {
    id?: string;
    title: string;
    lessons: LessonsInterface[],
    passUrl?: string
}

export interface LessonsInterface {
    id?: string;
    title: string;
    url: string;
}

