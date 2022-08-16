const request = require('supertest');
const { expect } = require('chai');
const { Organization } = require('../database/models')
const app = require('../app');

let adminToken;

describe('Organizations endpoint test on success', () => {
  describe('[GET - /organization/public]', () => {
    it('Should GET the organization data', async () => {
      const response = await request(app)
        .get('/organization/public');

      expect(response.statusCode).to.equal(200);
      expect(response.body.body).to.be.ok;
    }).timeout(5000);
  });

  describe('[POST - /organization]', () => {
    before('Generate admin token', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'usuarioadmin10@mail.com',
          password: 'ABCZ_efgi_1230',
        })
        .expect(200);

      adminToken = response.body.body;
    });

    it('Should update the organization', async () => {
      const response = await request(app)
        .post('/organization/public')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ name: 'Somos mas' });

      expect(response.statusCode).to.equal(200);
      expect(response.body).to.be.ok;
    }).timeout(5000);
  });
});

describe('Members endpoint failure request', () => {
  describe('[POST - /organization]', () => {
    let userToken, organization;

    before('Generate regular user token', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'usuariocomun10@mail.com',
          password: 'ABCD_efgh_1234',
        })
        .expect(200);

      userToken = response.body.body;
    });

    before('Delete organization temporarily', async () => {
      organization = await Organization.findOne({ attributes: ['id'] });
      await organization.destroy();
    })

    after('Restore deleted organization', async () => {
      await organization.restore();
    })

    it('Should return error bad request', async () => {
      const response = await request(app)
        .post('/organization/public')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ name: '' });

      expect(response.statusCode).to.equal(400);
    });

    it('Should return error unauthorized', async () => {
      const response = await request(app)
        .post('/organization/public')
        .send({ name: 'Somos mas' });

      expect(response.statusCode).to.equal(401);
    });

    it('Should return error forbidden', async () => {
      const response = await request(app)
        .post('/organization/public')
        .set('Authorization', `Bearer ${userToken}`)
        .send({ name: 'Somos mas' });

      expect(response.statusCode).to.equal(403);
    });

    it('Should return error not found', async () => {
      const response = await request(app)
        .post('/organization/public')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ name: 'Somos mas' });

      expect(response.statusCode).to.equal(404);
    });
  });
});
