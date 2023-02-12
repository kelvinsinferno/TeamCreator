const Intern = require('../lib/Intern');

describe('Intern', () => {

    test('should construct a new object including an school validated to a string of at least 2 characters', () => {
        const newIntern = new Intern('brett', 999, 'intern@test.com', 'DU');

        expect(newIntern.school).toEqual('DU');
    });

   
    test('should return Intern when the getRole() function is called', () => {
        const newIntern = new Intern('brett', 999, 'intern@test.com', 'DU');

        expect(newIntern.getTitle()).toEqual('Intern');
    });

    test('should return school name when the getSchool() function is called', () => {
        const newIntern = new Intern('brett', 999, 'intern@test.com', 'DU');

        expect(newIntern.getSchool()).toEqual('DU');
    });
}); 