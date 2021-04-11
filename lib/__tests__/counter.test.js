const { addChildrenCount } = require('../counter');

describe('counter.js', () => {
    describe('addChildrenCount', () => {
        test(' should add [2] to name of Dillauti', () => {
            const expectedResult = 'Dillauti [2]';

            const result = addChildrenCount(sampleData);

            expect(result[0].name).toBe(expectedResult);
        });

        test (' should add [6] to Winifred Graham', () => {
            const expectedResult = 'Winifred Graham [6]';

            const result = addChildrenCount(sampleData);

            expect(result[0].people[0].name).toBe(expectedResult);
        });

        test (' should add only count to name of countries and people without update other elements', () => {
            const expectedResult = [
                {
                    name: 'Dillauti [2]',
                    people:
                        [
                            {
                                name: 'Winifred Graham [6]',
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
                                name: 'Blanche Viciani [8]',
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
                    name: 'Uzuzozne [2]',
                    people:
                        [
                            {
                                name: 'Lillie Abbott [6]',
                                animals:
                                    [{ name: 'John Dory' },
                                    { name: 'Gayal' },
                                    { name: 'Hawk' },
                                    { name: 'Umbrella Squid' },
                                    { name: 'Hyrax' },
                                    { name: 'Henkel\'s Leaf-tailed Gecko' }]
                            },
                            {
                                name: 'Philip Davis [8]',
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
            ];

            const result = addChildrenCount(sampleData);

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
];