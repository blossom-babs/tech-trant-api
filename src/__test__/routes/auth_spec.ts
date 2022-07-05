import supertest from "supertest";
import app from '../../server';


describe('Authentication routes', () => {
  const request = supertest(app)
  let originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('register user', async () => {
    const result = await request.post('/api/v1/register').set('Accept', 'application/json').send({
      username: 'jike',
      email: 'jike@gmail.com',
      password: 'bb8'
    })
    expect(result.type).toEqual('application/json')
    expect(result.status).toEqual(400)
  })
  
  it('logs user in ', async () => {
    const result = await request.post('/api/v1/login').set('Accept', 'application/json').send({
      username: 'pike',
      password: 'bb8'
    })
    expect(result.status).toEqual(400)
    expect(result.type).toEqual('application/json')
    expect(result.body.Message).toBe('Username not found')
  })
})