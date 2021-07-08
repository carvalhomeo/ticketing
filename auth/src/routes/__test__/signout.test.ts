import request from 'supertest';
import { app } from "../../app";

it('clears the cookie after signing out', async () => {
    const signupResponse = await request(app)
    .post('/api/users/signup')
    .send({ 
        email: 'test@email.com',
        password: 'password'
    })
    .expect(201);

    const signoutResponse = await request(app)
    .post('/api/users/signout')
    .send({})
    .expect(200);

    expect(signoutResponse.get('Set-Cookie')).not.toEqual(signupResponse.get('Set-Cookie'));
});
