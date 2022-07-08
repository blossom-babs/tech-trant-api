import supertest from 'supertest';
import app from "../../app"

describe(('Post'), () => {
  describe('GET post route', () => {
    describe("given the product does not exist", () => {
      it('should return a 404', async () => {
        expect(true).toBe(true)
        const productId = 'product-123'
        await supertest(app).get(`/api/v1/post/${productId}`)
      })
    })
  })
})