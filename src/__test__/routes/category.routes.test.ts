import { dropCollections, dropDatabase, setUp } from '../setup/db';
import supertest from 'supertest'
import app from '../../app'

describe('CATEGORY', () => {

  beforeAll(async () => {
    await setUp()

  })

  afterAll(async () => {
    await dropCollections()
    await dropDatabase()
  })

  describe('GET available categories', () => {
    it('should return a 200', async () => {
      const res = await supertest(app).get('/api/v1/category')
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual([])
    })


    describe('CREATE a new category', () => {
      it('should return a 200', async () => {
        const data = {
          category: 'Test Category'
        }
        const res = await supertest(app).post('/api/v1/category').send(data)
        expect(res.status).toBe(200)
        expect(res.body).toBe(data.category)
      })
    })
  })
}) 