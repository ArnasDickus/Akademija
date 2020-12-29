export type CategoriesInterface = {
    id: string;
    title: string;
    url: string;
    courses: CoursesInterface[];
}

export type CoursesInterface = {
    id?: string;
    title: string;
    about: string;
    description: string;
    img: string;
    url: string;
    sections: CourseSectionInterface[];
}

export type CourseSectionInterface = {
    id: string;
    title: string;
    onUrlUpdate?: any;
    oldId?: any;
    lessons: LessonsInterface[],
}

export type LessonsInterface = {
    id?: string;
    title: string;
    url: string;
}

