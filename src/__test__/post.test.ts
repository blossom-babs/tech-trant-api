import  mongoose  from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import supertest from 'supertest'
import app from '../app'

describe('post', () => {

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })

  describe ('get post', () => {
    describe('given the product does not exist', () => {
      it('should return a 500', async () => {
        const postId = '62c2bc3b3fcaa7bddbf298d'
        await supertest(app).get(`/api/v1/post/${postId}`).expect(500)
      })
    })

    describe.only('given the product does not exist', () => {
      it('should return a 200', async () => {
        const postId = '62c2bc3b3fcaa7bddbf2928d'
        await supertest(app).get(`/api/v1/post/${postId}`).expect(200)
      })
    })
  })
}) 