const { parseArgv } = require('../args-parser');

describe('args-parser.js', () => {
    describe('parseArgvs', () => {
        test('if argv is not array', () => {
            const emptyArgv = '';
            const parseArgvCall = () => (parseArgv(emptyArgv));

            expect(parseArgvCall).toThrowError();
        });
        test('if argv length is less than 2 it should throw an error', () => {
            const emptyArgv = [];
            const parseArgvCall = () => (parseArgv(emptyArgv));

            expect(parseArgvCall).toThrowError();
        });
        test('if argv has no arguments, it should return an empty object', () => {
            const argvWithoutArguments = ['node', 'app.js'];
            const expectedResult = {};

            const argv = parseArgv(argvWithoutArguments);

            expect(argv).toEqual(expectedResult);
        });
        test('if agrv contain --help or -h, it should return an object with help equal to true', () => {
            const argvWithFullHelp = ['node', 'app.js', '--help'];
            const argvWithCompactHelp = ['node', 'app.js', '-h'];
            const expectedResult = {
                help: true
            }


            const argvFromFull = parseArgv(argvWithFullHelp);
            const argvFromCompact = parseArgv(argvWithCompactHelp);

            expect(argvFromFull.help).toBe(true);
            expect(argvFromCompact.help).toBe(true);
        });
    })
});