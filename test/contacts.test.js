const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Contacts endpoint test on success', () => {
  before(async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'usuarioadmin3@mail.com',
        password: 'ABCZ_efgi_1230',
      })
      .expect(200);
    global.tokenAdminTest = response.body.body;
  }),
    before(async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'usuariocomun2@mail.com',
          password: 'ABCD_efgh_1234',
        })
        .expect(200);
      global.tokenUserTest = response.body.body;
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
            name: 'nombre1',
            email: 'usuariocomun7@mail.com',
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
            name: 'nombre1',
            phone: '123456789',
            email: 'usuariocomun8@mail.com',
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
