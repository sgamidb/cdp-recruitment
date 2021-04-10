const { parseArgv } = require('../args-parser');

describe('args-parser.js', () => {
    describe('parseArgvs', () => {
        test('if argv is not array, it shuld throw an error', () => {
            const emptyArgv = '';
            const parseArgvCall = () => (parseArgv(emptyArgv));

            expect(parseArgvCall).toThrowError();
        });
        test('if argv length is less than 2 it should throw an error', () => {
            const emptyArgv = [];
            const parseArgvCall = () => (parseArgv(emptyArgv));

            expect(parseArgvCall).toThrowError();
        });
        test('if agrv contain an unknown argument, it should throw an error', () => {
            const argvWithUnknownArg = ['node', 'app.js', 'unknownArg'];
            const parseArgvCall = () => (parseArgv(argvWithUnknownArg));

            expect(parseArgvCall).toThrowError();
        });
        test('if argv has no arguments, it should return an empty object', () => {
            const argvWithoutArguments = ['node', 'app.js'];
            const expectedResult = {};

            const parsedArgv = parseArgv(argvWithoutArguments);

            expect(parsedArgv).toEqual(expectedResult);
        });
        test('if agrv contain --help or -h, it should return an object with help equal to true', () => {
            const argvWithFullHelp = ['node', 'app.js', '--help'];
            const argvWithCompactHelp = ['node', 'app.js', '-h'];
            const expectedResult = true;

            const argvFromFull = parseArgv(argvWithFullHelp);
            const argvFromCompact = parseArgv(argvWithCompactHelp);

            expect(argvFromFull.help).toBe(expectedResult);
            expect(argvFromCompact.help).toBe(expectedResult);
        });
        test('if argv contain --filter=ry, it should return an object with filter equal to ry', () => {
            const argvWithFilter = ['node', 'app.js', '--filter=ry'];
            const expectedResult = 'ry';

            const parsedArgv = parseArgv(argvWithFilter);

            expect(parsedArgv.filter).toBe(expectedResult);
        });
        test('if argv contain --filter="une string \'" , it should return an object with filter equal to une string avec \'', () => {
            const argvWithFilter = ['node', 'app.js', '--filter=une string avec \''];
            const expectedResult = 'une string avec \'';

            const parsedArgv = parseArgv(argvWithFilter);

            expect(parsedArgv.filter).toBe(expectedResult);
        });
        test('if argv contain --count or -c, it should return an object with count equal to true', () => {
            const argvWithFilter = ['node', 'app.js', '--filter=une string avec \''];
            const expectedResult = 'une string avec \'';

            const parsedArgv = parseArgv(argvWithFilter);

            expect(parsedArgv.filter).toBe(expectedResult);
        });
        test('if argv contain --filter=ry and --count, it should return an object with filter equal to ry and count equal to true', () => {
            const argvWithFilter = ['node', 'app.js', '--filter=ry', '--count'];
            const expectedResult = {
                filter: 'ry',
                count: true
            };

            const parsedArgv = parseArgv(argvWithFilter);

            expect(parsedArgv).toEqual(expectedResult);
        });
    })
});