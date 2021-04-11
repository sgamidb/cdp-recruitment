const filter = (data, searched) => {
    const result = data.reduce(countriesReducer(searched), []);
    return result;
}

const countriesReducer = (searched) => {
    return (acc, { name, people }) => {
        const reducedPeople = people.reduce(peopleReducer(searched), []);

        if (reducedPeople.length > 0) {
            return acc.concat({
                name,
                people: reducedPeople
            });
        }

        return acc;
    }
}

const peopleReducer = (searched) => {
    return (acc, { name, animals }) => {
        const regexp = new RegExp(searched);
        const filteredAnimals = animals.filter(animal => animal.name.search(regexp) !== -1);
        if (filteredAnimals.length > 0) {
            return acc.concat({
                name,
                animals: filteredAnimals
            });
        }

        return acc;
    }
}

module.exports = {
    filter
}