import supertest from "supertest";
import app from '../../server';
//var originalTimeout:number;

// beforeEach(function() {
//     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
// });

// afterEach(function() {
//   jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
// });
describe('post routes', () => {
  it('register user', async() => {
    const req = supertest(app)
    const res = await req.get('/api/v1/posts')
    expect(res.status).toBe(200)
  })
})