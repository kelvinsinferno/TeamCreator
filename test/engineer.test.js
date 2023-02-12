const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    test('should construct a new object including an github username', () => {
        const newEngineer = new Engineer('crystal', 777, 'engineer@test.com', 'userName');

        expect(newEngineer.github).toEqual('userName');
    });

    test('should return Engineer when the getRole() function is called', () => {
        const newEngineer = new Engineer('crystal', 777, 'engineer@test.com', 'userName');

        expect(newEngineer.getTitle()).toEqual('Engineer');
    });

    test('should return GitHub user name when the getGithub() function is called', () => {
        const newEngineer = new Engineer('crystal', 777, 'engineer@test.com', 'userName');

        expect(newEngineer.getGithub()).toEqual('userName');
    });
}); 