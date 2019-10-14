const chai = require('chai');
const chaiHttp = require('chai-http');
const getTitle = require('./index').getTitle;
const app = require('./index').app;
const should = chai.should();
chai.use(chaiHttp);

describe('/GET all title', () => {
    it('get all title', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    }).timeout(5000);
})

