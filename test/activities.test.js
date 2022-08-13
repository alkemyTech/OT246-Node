const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Activities endpoint test on success', () => {
    before(async () => {
        const response = await request(app)
        .post('/auth/login')
        .send({
            email: 'rickyespinoza@mail.com',
            password: 'ABC123_f',
        })
        .expect(200);
        global.token = response.body.body;
    }),

    describe('[POST - /activities]', () => {
        it('Should create a new activity', async () => {
            const response = await request(app)
            .post('/activities')
            .set('Authorization', `Bearer ${global.token}`)
            .send({
                name: 'Activity 1',
                image: 'https://imagetest.com/1',
                content: 'Content 1',
                createdAt: new Date(),
            });
            expect(response.statusCode).to.equal(201);
            expect(response.body);
        }).timeout(5000);
    }),

    describe('[PUT - /activities/:id]', () => {
        it('Should update a activity', async () => {
            const response = await request(app)
            .put('/activities/1')
            .set('Authorization', `Bearer ${global.token}`)
            .send({
                name: 'Activity 2',
                image: 'https://imagetest.com/2',
                content: 'Content 2',
                createdAt: new Date(),
            });
            expect(response.statusCode).to.equal(200);
            expect(response.body);
        }).timeout(5000);
    })
});

describe('Activities endpoint test on failure', () => {
    describe('[POST - /activities]', () => {
    it('Should return a 401 error if no token is provided', async () => {
        const response = await request(app)
        .post('/activities')
        .send({
            name: 'Activity 1',
            image: 'https://imagetest.com/1',
            content: 'Content 1',
            createdAt: new Date(),
        });
        expect(response.statusCode).to.equal(401);
        expect(response.body);
    })
    }),
    
    describe('[POST - /activities]', () => {
    it('Should return a 400 error if no name is provided', async () => {
        const response = await request(app)
        .post('/activities')
        .set('Authorization', `Bearer ${global.token}`)
        .send({
            image: 'https://imagetest.com/1',
            content: 'Content 1',
            createdAt: new Date(),
        });
        expect(response.statusCode).to.equal(400);
        expect(response.body);
    })
    }),

    describe('[PUT - /activities/:id]', () => {
    it('Should return a 404 error if ID not exist', async () => {
        const response = await request(app)
        .put('/activities/100')
        .set('Authorization', `Bearer ${global.token}`)
        .send({
            name: 'Activity 2',
            image: 'https://imagetest.com/2',
            content: 'Content 2',
            createdAt: new Date(),
        });
        expect(response.statusCode).to.equal(404);
        expect(response.body);
    })
    }),

    describe('[PUT - /activities/:id]', () => {
    it('Should return a 400 error if the image is not a URL. ', async () => {
        const response = await request(app)
        .post('/activities')
        .set('Authorization', `Bearer ${global.token}`)
        .send({
            name: 'Activity 1',
            image: 'imagetest1',
            content: 'Content 1',
            createdAt: new Date(),
        });
        expect(response.statusCode).to.equal(400);
        expect(response.body);
    })
    })
})

