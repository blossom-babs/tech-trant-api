import { dropCollections, dropDatabase, setUp } from '../setup/db';
import supertest from 'supertest'
import app from '../../app'
import mongoose from 'mongoose';

describe('POST', () => {

  beforeAll(async () => {
    await setUp()

  })

  afterAll(async () => {
    await dropCollections()
    await dropDatabase()
  })

  let userId = new mongoose.Types.ObjectId().toString();

  const postPayload = {
    title: 'Post one',
    description: 'First Entry',
    author: 'Blossom',
    photo: '',
    userId,
    categories: 'coding, programming'
  }

  describe('Given a NULL ID', () => {
    it('should not be able to create a post', async () => {
      const response = await supertest(app).post(`/api/v1/posts`).send(postPayload)
      expect(response.body).toEqual({})
      expect(response.status).toBe(500)
    })
  })

  describe('GET post', () => {
    describe('given the product does not exist', () => {
      it('should return a 500', async () => {
        const postId = '62c2bc3b3fcaa7bddbf298d'
        await supertest(app).get(`/api/v1/post/${postId}`).expect(500)
      })
    })

    describe('given the product Exists', () => {
      it('should return a 200', async () => {
        const postId = '62c2bc3b3fcaa7bddbf2928d'
        await supertest(app).get(`/api/v1/post/${postId}`).expect(200)
      })
    })
  })
}) 