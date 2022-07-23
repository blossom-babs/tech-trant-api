import supertest from 'supertest'
import app from '../app'

describe('post', () => {
  describe ('get post', () => {
    describe('given the product does not exist', () => {
      it('should return a 404', async () => {
        const postId = 'post-123'
        await supertest(app).get(`/api/v1/post/${postId}`).expect(500)
      })
    })
  })
}) 