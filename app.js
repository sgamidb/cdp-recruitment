const { data } = require('./data/data');
const { parseArgv } = require('./lib/args-parser');
const { filter: filterData } = require('./lib/filter');
const { addChildrenCount } = require('./lib/counter');

const { help, filter, count } = parseArgv(process.argv);


if (help || (!filter && !count)) {
    console.log(`
    Utilisation : node app.js [OPTION]
    Filtre les données présentes dans le fichier data.js.
    Ajoute le nombre d'enfant pour les pays et les personnes.

    Arguments :
      -h, --help         affiche l'aide
      -f, --filter       filtre les données avec le pattern spécifié
      -c, --count        ajoute le nombre d'enfants

    Exemple : 
      - Afficher l'aide
        node app.js --help

      - Filtre les animaux qui contiennnent 'ry'
        node app.js --filter=ry

      - Ajoute le nombre d'enfants
        node app.js --count

      - Filtre les animaux avec un espace et ajoute le nombre d'enfants
        node app.js --filter=" " --count
    `);
    process.exit(0);
}

let result = data;

if (filter) {
    result = filterData(result, filter);
}

if (count) {
    result = addChildrenCount(result);
}

console.dir(result, {
    depth: null
});
process.exit(0);