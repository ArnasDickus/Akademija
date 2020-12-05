import { CategoriesInterface } from "../interfaces/categories.interface";

export const Categories: CategoriesInterface[] = [
    {
        title: 'Math: Pre-K - 8th Grade',
        id: '1',
        url: 'k-8-grades',
        courses: [
            {
                id: '1',
                title: 'Up to 1st Grade (Khan kids)',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'early-math'
            },
            {
                id: '2',
                title: '2nd Grade',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'cc-2nd-grade-math'

            },
            {
                id: '3',
                title: '3rd Grade',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'cc-3nd-grade-math'
            },
            {
                id: '4',
                title: '4th Grade',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'cc-4th-grade-math'
            },
        ]
    },

    {
        title: 'Math: High School & College',
        id: '2',
        url: 'math',
        courses: [
            {
                id: '1',
                title: 'Algebra',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'algebra'
            },
            {
                id: '2',
                title: 'Geometry',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'geometry'
            },
            {
                id: '3',
                title: 'Algebra2',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'algebra2'
            },
            {
                id: '4',
                title: 'Trigonometry',
                description: 'Learn how to count',
                img: '../../assets/course-placeholder.jpg',
                url: 'trigonometry'
            },
        ]
    },
]
