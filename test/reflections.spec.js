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
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        done(err);
      });
  });

  it.skip('should return the specific reflection with the given ID', (done) => {
    chai
      .request(app)
      .get('/reflections/6981542e-cb3f-4a4a-8211-5c245d8b0bcf')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        done(err);
      });
  });

  it('should return an error if reflection does not exist', (done) => {
    chai
      .request(app)
      .get('/api/v1/reflections/uibruru')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(404);
        expect(res.body.error).to.equal('reflection not found');
        done(err);
      });
  });

  it('should return an error if reflection ID is invalid');
});

describe('POST / requests', () => {
  it('should create a new reflection if details are correct', (done) => {
    chai
      .request(app)
      .post('/api/v1/reflections')
      .send({
        success: 'This is a success test',
        lowPoint: 'This is a lowPoint test',
        takeAway: 'This is a takeaway test',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(201);
        expect(res.body).to.have.property('reflection');
        expect(res.body.reflection).to.be.an('object');
        done(err);
      });
  });
});
