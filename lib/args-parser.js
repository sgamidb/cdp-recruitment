const helpPattern = /(?:--help|-h)/;
const filterPattern = /(?:--filter|-f)=(.+)/;
const countPattern = /(?:--count|-c)/;

function parseArgv(argv) {
    if(!Array.isArray(argv) || argv.length < 2){
        throw new Error('Invalid argument - must be process.argv')
    }
    
    const parsedArgv = {};
    const argvWithoutBin = argv.splice(2);

    argvWithoutBin.forEach((argument) => {
        let result = argument.match(helpPattern);
        if(result){
            parsedArgv.help = true;
            return;
        }
        
        result = argument.match(filterPattern);
        if(result){
            parsedArgv.filter = result[1];
            return;
        }

        result = argument.match(countPattern);
        if(result) {
            parsedArgv.count = true;
            return;
        }

        throw new Error(`Unexepected argument ${argument}`);
    })

    return parsedArgv;
};

module.exports = {
    parseArgv
}