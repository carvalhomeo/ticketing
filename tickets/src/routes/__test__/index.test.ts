import request from 'supertest';
import { app } from '../../app';

it('can fetch a list of tickets', async () => {
    await global.createTicket();
    await global.createTicket();
    await global.createTicket();

    const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

    expect(response.body.length).toEqual(3);
})