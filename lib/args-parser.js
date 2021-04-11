const helpPattern = /(?:--help|-h)/;
const filterPattern = /(?:--filter|-f)=(.+)/;
const countPattern = /(?:--count|-c)/;

const parseArgv = (argv) => {
    if(!Array.isArray(argv) || argv.length < 2){
        throw new Error('Invalid argument - must be process.argv')
    }
    
    const parsedArgv = {
        help: false,
        filter: false,
        count: false,
    };

    const argvWithoutBin = argv.splice(2);

    argvWithoutBin.forEach((argument) => {
        if(argument.match(helpPattern)){
            parsedArgv.help = true;
            return;
        }
        
        const filterResult = argument.match(filterPattern);
        if(filterResult){
            parsedArgv.filter = filterResult[1];
            return;
        }

        if(argument.match(countPattern)) {
            parsedArgv.count = true;
            return;
        }

        throw new Error(`Unexepected argument ${argument}`);
    });

    return parsedArgv;
};

module.exports = {
    parseArgv
}