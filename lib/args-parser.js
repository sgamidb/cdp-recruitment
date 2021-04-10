function parseArgv(argv) {
    if(!Array.isArray(argv) || argv.length < 2){
        throw new Error('Invalid argument - must be process.argv')
    }
    
    const parsedArgv = {};
    const argvWithoutBin = argv.splice(2);

    argvWithoutBin.forEach((argument) => {
        if(argument.match('/(--help)|(-h)')){
            parsedArgv.help = true;
        }
    })

    return parsedArgv;
};

module.exports = {
    parseArgv
}