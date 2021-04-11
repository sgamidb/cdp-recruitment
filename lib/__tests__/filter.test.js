const { filter } = require('../filter');

describe('filter.js', () => {
    describe('filter(data, pattern)', () => {
        test('with pattern equal to ry, it should return only animals containing ry', () => {
            const searched = 'ry';
            const expectedResult = [
                {
                    name: 'Uzuzozne',
                    people:
                        [
                            {
                                name: 'Lillie Abbott',
                                animals:
                                    [
                                        { name: 'John Dory' },
                                    ]
                            },
                        ]
                }
            ];

            const result = filter(sampleData, searched);

            expect(result).toEqual(expectedResult);
        });
        test('with pattern equal to ". .", it should return only animals containing a space', () => {
            const searched = '. .';
            const expectedResult = [
                {
                    name: 'Dillauti',
                    people:
                        [
                            {
                                name: 'Blanche Viciani',
                                animals:
                                    [
                                        { name: 'Guinea Fowl' },
                                        { name: 'Deer Mouse' }
                                    ]
                            }
                        ]
                },
                {
                    name: 'Uzuzozne',
                    people:
                        [
                            {
                                name: 'Lillie Abbott',
                                animals:
                                    [{ name: 'John Dory' },
                                    { name: 'Umbrella Squid' },
                                    { name: 'Henkel\'s Leaf-tailed Gecko' }]
                            },
                            {
                                name: 'Philip Davis',
                                animals:
                                    [
                                        { name: 'Mini Donkey' },
                                        { name: 'Flatback Turtle' },
                                        { name: 'Leafy Seadragon' },
                                    ]
                            }
                        ]
                }
            ]

            const result = filter(sampleData, searched);

            expect(result).toEqual(expectedResult);
        });
        test('with pattern equal to ., it should return all animals', () => {
            const searched = '.';
            const expectedResult = sampleData;

            const result = filter(sampleData, searched);

            expect(result).toEqual(expectedResult);
        });
    });
});

const sampleData = [
    {
        name: 'Dillauti',
        people:
            [
                {
                    name: 'Winifred Graham',
                    animals:
                        [
                            { name: 'Anoa' },
                            { name: 'Duck' },
                            { name: 'Narwhal' },
                            { name: 'Badger' },
                            { name: 'Cobra' },
                            { name: 'Crow' }
                        ]
                },
                {
                    name: 'Blanche Viciani',
                    animals:
                        [
                            { name: 'Barbet' },
                            { name: 'Rhea' },
                            { name: 'Snakes' },
                            { name: 'Antelope' },
                            { name: 'Echidna' },
                            { name: 'Crow' },
                            { name: 'Guinea Fowl' },
                            { name: 'Deer Mouse' }
                        ]
                }
            ]
    },
    {
        name: 'Uzuzozne',
        people:
            [
                {
                    name: 'Lillie Abbott',
                    animals:
                        [{ name: 'John Dory' },
                        { name: 'Gayal' },
                        { name: 'Hawk' },
                        { name: 'Umbrella Squid' },
                        { name: 'Hyrax' },
                        { name: 'Henkel\'s Leaf-tailed Gecko' }]
                },
                {
                    name: 'Philip Davis',
                    animals:
                        [
                            { name: 'Mini Donkey' },
                            { name: 'Flatback Turtle' },
                            { name: 'Rabbit' },
                            { name: 'Zebra' },
                            { name: 'Rhea' },
                            { name: 'Leafy Seadragon' },
                            { name: 'Bat' },
                            { name: 'Caterpillar' }
                        ]
                }
            ]
    }
]