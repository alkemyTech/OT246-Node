const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');
const { Member } = require('../database/models');

describe('Members endpoint test on success', () => {
  before(async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'usuarioadmin8@mail.com',
        password: 'ABCZ_efgi_1230',
      })
      .expect(200);
    global.tokenTest = response.body.body;
  }),

    describe('[GET - /members]', () => {
      it('Should GET all members', async () => {
        const response = await request(app)
          .get('/members')
          .set('Authorization', `Bearer ${global.tokenTest}`);
        expect(response.statusCode).to.equal(200);
        expect(response.body.members);
      }).timeout(5000);
    }),

    describe('[POST - /members]', () => {
      it('Should create a new member', async () => {
        const response = await request(app)
          .post('/members')
          .set('Authorization', `Bearer ${global.tokenTest}`)
          .send({
            name: 'Ricky',
            image: 'https://rickyespinoza.com',
            createdAt: new Date(),
          });
        expect(response.statusCode).to.equal(201);
        expect(response.body);
      });
    }),

    describe('[PUT - /members]', () => {
      it('Should update a member', async () => {
        const response = await request(app)
          .put('/members/1')
          .set('Authorization', `Bearer ${global.tokenTest}`)
          .send({
            name: 'Jaime',
            image: 'https://image.com/image.jpg',
            createdAt: new Date(),
          });
        expect(response.statusCode).to.equal(200);
        expect(response.body);
      }).timeout(5000);
    });
  describe('[DELETE /members]', () => {
    it('Should delete a member', async () => {
      const response = await request(app)
        .delete('/members/1')
        .set('Authorization', `Bearer ${global.tokenTest}`);
      expect(response.statusCode).to.equal(200);
      expect(response.body);
    }).timeout(5000);
  })
}),

after(async () => {
  await Member.restore({ where: {id: 1}});
}),

describe('Members endpoint failure request', () => {
  describe('[GET - /members]', () => {
    it('Should return error unauthorized', async () => {
      const response = await request(app)
        .get('/members')
        .set(
          'Authorization',
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvcmFjaW9nQG1haWwuY29tIiwiaWF0IjoxNjYwMjYxMjUyLCJleHAiOjE2NjAyNjQ4NTJ9.cKKRe8l2aEhOHeD_GfZp1wwBt41A7btqBMFUxbHPew`
        );
      expect(response.statusCode).to.equal(401);
    });
  }),

    describe('[POST - /members]', () => {
      it('Should return error missing property', async () => {
        const response = await request(app)
          .post('/members')
          .set('Authorization', `Bearer ${global.tokenTest}`)
          .send({
            image: 'https://rickyespinoza.com',
            createdAt: new Date(),
          });
        expect(response.statusCode).to.equal(400);
      });
    }),

    describe('[PUT - /members/:id]', () => {
      it('Should return error missing member', async () => {
        const response = await request(app)
          .put('/members/22')
          .set('Authorization', `Bearer ${global.tokenTest}`)
          .send({
            name: 'Gilian',
            createdAt: new Date(),
          });
        expect(response.statusCode).to.equal(404);
      });
    }),

    describe('[DELETE - /members/:id]', () => {
      it('Should return error missing member', async () => {
        const response = await request(app)
          .delete('/members/66')
          .set('Authorization', `Bearer ${global.tokenTest}`);
        expect(response.statusCode).to.equal(404);
      });
    });
});
