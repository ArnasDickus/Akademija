import {CategoriesInterface} from "../interfaces/categories.interface";


export const Categories: CategoriesInterface[] = [
    {
        title: 'Math: Pre-K - 8th Grade',
        id: '1',
        url: 'k-8-grades',
        courses: [
            {
                id: '1',
                title: 'Up to 1st Grade (Khan kids)'
            },
            {
                id: '2',
                title: '2nd Grade'
            },
            {
                id: '3',
                title: '3rd Grade'
            },
            {
                id: '4',
                title: '4th Grade'
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
                title: 'Algebra'
            },
            {
                id: '2',
                title: 'Geometry'
            },
            {
                id: '3',
                title: 'Algebra2'
            },
            {
                id: '4',
                title: 'Trigonometry'
            },
        ]
    },
]
