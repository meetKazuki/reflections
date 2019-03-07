import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET / requests', () => {
  it('should return the list of all the reflections created', (done) => {
    chai
      .request(app)
      .get('/api/v1/reflections')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal(200);
        expect(res.body).to.be.an('object');
        done(err);
      });
  });

  /* it('should return the specific reflection with the given ID', (done) => {
    chai
      .request(app)
      .get('/reflections/:id')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal(200);
        expect(res.body).to.be.an('object');
        done(err);
      });
  }); */

  it('should return an error if reflection does not exist', (done) => {
    chai
      .request(app)
      .get('/api/v1/reflections/uibruru')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.error).to.equal('reflection not found');
        done(err);
      });
  });
});
