const { expect } = require('chai');
const request = require('supertest');
const app = require('../app')


describe('news tests', () => {
  let userToken, adminToken;

  before('get login tokens', async () => {
    const userLoginResponse = await request(app)
      .post('/auth/login')
      .send({
        email: 'usuariocomun1@mail.com',
        password: 'ABCD_efgh_1234',
      })
      .expect(200);

    userToken = userLoginResponse.body.body;

    const adminLoginResponse = await request(app)
      .post('/auth/login')
      .send({
        email: 'usuarioadmin1@mail.com',
        password: 'ABCZ_efgi_1230',
      })
      .expect(200);

    adminToken = adminLoginResponse.body.body;
  });

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

    describe('[GET - /news/:id]', () => {
      it('should return a single new', async () => {
        const response = await request(app)
          .get('/news/1')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.statusCode).to.equal(200);
        expect(response.body)
          .to.have.property('body')
          .that.has.property('id');
      });
    });

    describe('[GET - /news/:id/comments', () => {
      it('should return an array of comments', async () => {
        const response = await request(app)
          .get('/news/1/comments')
          .set('Authorization', `Bearer ${userToken}`);

        expect(response.statusCode).to.equal(200);

        expect(response.body).to.have.property('body');
        expect(Array.isArray(response.body.body)).to.be.true;
      });
    });

    describe('[POST - /news', () => {
      it('should create a new', async () => {
        const response = await request(app)
          .post('/news')
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            name: 'title',
            content: 'body',
            image: 'https://foo.bar',
            categoryId: 1,
          });

        expect(response.statusCode).to.equal(201);
        expect(response.body)
          .to.have.property('body')
          .that.has.property('id');
      });
    });
  });

  describe('news tests on failure', () => {
    describe('[GET - /news/:id]', () => {
      it('should return 401 if no token provided', async () => {
        const response = await request(app).get('/news/1');

        expect(response.statusCode).to.equal(401);
      });

      it('should return 403 if user is not an admin', async () => {
        const response = await request(app)
          .get('/news/1')
          .set('Authorization', `Bearer ${userToken}`);

        expect(response.statusCode).to.equal(403);
      });

      it('should return 404 if new is not found', async () => {
        const response = await request(app)
          .get('/news/notanid')
          .set('Authorization', `Bearer ${adminToken}`);

        expect(response.statusCode).to.equal(404);
      });
    });

    describe('[GET - /news/:id/comments]', () => {
      it('should return 401 if no token provided', async () => {
        const response = await request(app).get('/news/1/comments');

        expect(response.statusCode).to.equal(401);
      });

      it('should return 404 if new is not found', async () => {
        const response = await request(app)
          .get('/news/notanid/comments')
          .set('Authorization', `Bearer ${userToken}`);

        expect(response.statusCode).to.equal(404);
      });
    });

    describe('[POST - /news', () => {
      it('should return 400 if request body is not valid', async () => {
        const response = await request(app)
          .post('/news')
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            name: 'title',
            content: 'body',
            image: 'https://foo.bar',
            categoryId: 'not a number',
          });

        expect(response.statusCode).to.equal(400);
      });

      it('should return 401 if no token provided', async () => {
        const response = await request(app)
          .post('/news')
          .send({
            name: 'title',
            content: 'body',
            image: 'https://foo.bar',
            categoryId: 1,
          });

        expect(response.statusCode).to.equal(401);
      });

      it('should return 403 if user is not admin', async () => {
        const response = await request(app)
          .post('/news')
          .set('Authorization', `Bearer ${userToken}`)
          .send({
            name: 'title',
            content: 'body',
            image: 'https://foo.bar',
            categoryId: 1,
          });

        expect(response.statusCode).to.equal(403);
      });

      it('should return 404 if category is not found', async () => {
        const response = await request(app)
          .post('/news')
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            name: 'title',
            content: 'body',
            image: 'https://foo.bar',
            categoryId: -1,
          });

        expect(response.statusCode).to.equal(404);
      });
    });
  });
});
