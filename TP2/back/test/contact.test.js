// test/contact.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); 
const Contact = require('../contact.model');

chai.use(chaiHttp);
const should = chai.should();

describe('Contacts API', () => {
    before(async () => {
        await Contact.deleteMany(); 
    });

    it('should create a new contact', (done) => {
        chai.request(server)
            .post('/contacts')
            .send({
                firstname: 'John',
                lastname: 'Doe',
                email: 'johndoré@example.com',
                phoneNumber: '1234567890',
            })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('firstname').eql('John');
                done();
            });
    });

    it('should get all contacts', (done) => {
        chai.request(server)
            .get('/contacts')
            .end((err, res) => {
                console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
