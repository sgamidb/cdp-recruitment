const addChildrenCount = (data) => data.map(addChildrenToCountry);

const addChildrenToCountry = (country) => {
    const people = country.people.map(addChildrenToPeople);
    return {
        name: `${country.name} [${country.people.length}]`,
        people
    }
}

const addChildrenToPeople = (people) => (
    {
        name: `${people.name} [${people.animals.length}]`,
        animals: people.animals
    }
);

module.exports = {
    addChildrenCount
}