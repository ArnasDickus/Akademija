export interface CategoriesInterface {
    title: string;
    id?: string;
    url: string;
    courses: CoursesInterface[];
}

export interface CoursesInterface {
    id?: string;
    title: string;
    description: string;
    img: string;
    url: string;
    sections?: CourseSection[];
}


export interface CourseSection {
    title: string;
    url: string;
}

