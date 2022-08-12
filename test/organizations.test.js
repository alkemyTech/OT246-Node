const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Organizations endpoint test on success', () => {
  describe('[GET - /organization/public]', () => {
    it('Should GET the organization data', async () => {
      const response = await request(app)
        .get('/organization/public');

      expect(response.statusCode).to.equal(200);
      expect(response.body.body).to.be.ok;
    }).timeout(5000);
  });
});
