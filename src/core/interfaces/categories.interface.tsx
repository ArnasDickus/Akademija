export interface CategoriesInterface {
    title: string;
    id: string;
    url: string;
    courses: {
        id: string;
        title: string;
    }[];
}

export interface CoursesInterface {
    id: string;
    title: string;
}
