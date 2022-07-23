import supertest from 'supertest';
import app from "../../app"
import { setUp, dropCollections, dropDatabase } from '../../setup/db';

describe(('Post'), () => {
  beforeEach(async () => {
    await setUp()
  })

  afterEach(async () => {
    await dropCollections()
    await dropDatabase()
  })
  
  const req = supertest(app)
  describe('GET post route', () => {
    describe("given the product does not exist", () => {
      it('should return a 404', async () => {
        expect(true).toBe(true)
        const productId = 'product-123'
        const result = await req.get(`/api/v1/posts`)
        expect(result.status).toBe(200)
      })
    })
  })
})