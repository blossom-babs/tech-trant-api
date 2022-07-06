import request from "supertest";
import app from '../../server';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});
jest.setTimeout(30000);
describe('post routes', () => {
  test('creates post', async () => {
    const result = await request(app).post('/api/v1/posts').send({
      title: 'Leetcode 1',
      description: 'Infamous two sum',
      author: 'Blossom Babs',
      photo: 'image.jpg',
      categories: ['Dsa', 'Leetcode']
    })
    expect(result.status).toEqual(400)
  })


  test('get index', async () => {
    const result = await request(app).get('/api/v1/posts')
    expect(result.type).toEqual('application/json')
    expect(result.status).toEqual(200)
  })
})

