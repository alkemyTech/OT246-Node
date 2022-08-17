const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Contacts endpoint test on success', () => {
  before(async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'rickyespinoza@mail.com',
        password: 'ABC123_f',
      })
      .expect(200);
    global.tokenAdminTest = response.body.body;
  }),
    before(async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'horaciog@mail.com',
          password: 'ABC123_f',
        })
        .expect(200);
      global.tokenUserTest = response.body.body;
      console.log(global.tokenUserTest);
    }),
    describe('[GET - /contacts]', () => {
      it('Should GET all members', async () => {
        const response = await request(app)
          .get('/contacts')
          .set('Authorization', `Bearer ${global.tokenAdminTest}`);
        expect(response.statusCode).to.equal(200);
        expect(response.body.members);
      });
    }),
    describe('[POST - /contacts]', () => {
      it('Should POST a contact', async () => {
        const response = await request(app)
          .post('/contacts')
          .set('Authorization', `Bearer ${global.tokenUserTest}`)
          .send({
            name: 'Ricardo',
            email: 'rickyespinoza@mail.com',
          });
        expect(response.statusCode).to.equal(201);
      });
    });
});

describe('Contacts endpoint failure requests', () => {
  describe('[GET - /contacts]', () => {
    it('Should fail auth to GET all contacts', async () => {
      const response = await request(app)
        .get('/contacts')
        .set('Authorization', `Bearer fakeToken`);
      expect(response.statusCode).to.equal(401);
    });
  }),
    describe('[POST - /contacts]', () => {
      it('Should fail auth to POST a contact', async () => {
        const response = await request(app)
          .post('/contacts')
          .set('Authorization', `Bearer fakeToken`)
          .send({
            name: 'Ricardo',
            phone: '123456789',
            email: 'richard@gmail.com',
            message: 'Hola',
          });
        expect(response.statusCode).to.equal(401);
      }),
        it('Should fail POST validation fields', async () => {
          const response = await request(app)
            .post('/contacts')
            .set('Authorization', `Bearer ${global.tokenUserTest}`)
            .send({
              phone: '123456789',
              email: 'gg',
              message: 'Hola',
            });
          expect(response.statusCode).to.equal(400);
        });
    });
});
