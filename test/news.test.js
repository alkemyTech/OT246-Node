const { expect } = require('chai');
const request = require('supertest');
const app = require('../app')

describe('news tests on success', () => {
  describe('[GET - /news]', () => {
    it('Should return paginated array of news', async () => {
      const response = await request(app).get('/news');

      expect(response.statusCode).to.equal(200);

      expect(response.body)
        .to.have.property('body')
        .that.has.property('urls');

      const { body: { body } } = response;

      expect(body.urls)
        .to.have.property('prevUrl')
        .that.is.a.string;

      expect(body.urls)
        .to.have.property('nextUrl')
        .that.is.a.string;

      expect(Array.isArray(body.news)).to.be.true;
    });
  });
});