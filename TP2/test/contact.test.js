const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const connectDB = require('../db'); // Importez la connexion DB

const expect = chai.expect;
chai.use(chaiHttp);

before(async () => {
    await connectDB(); // Assurez-vous que la base de données est connectée avant de commencer les tests
});

describe('Contacts API', () => {
    it('should create a new contact', (done) => {
        chai.request(app)
            .post('/contacts')
            .send({ firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com', phone: '1234567890' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('firstname', 'John');
                done();
            });
    });

    it('should get all contacts', (done) => {
        chai.request(app)
            .get('/contacts')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});
