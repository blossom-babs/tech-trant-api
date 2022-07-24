import mongoose  from 'mongoose';
import supertest from "supertest";
import app from '../../app'
import { dropCollections, dropDatabase, setUp } from '../setup/db';

describe('User', () => {

  beforeAll(async () => {
    await setUp()
  
  })
  
  afterAll(async () => {
    await dropCollections()
    await dropDatabase()
  })

  let userId = new mongoose.Types.ObjectId().toString();

  describe('Given the CORRECT input', () => {
    it('A user is ABLE to register', async () => {
      await supertest(app).post('/api/v1/register').send({
        email: "Koan@gmail.com",
        username: "koan",
        password: "Koan1",
        _id: userId
      }).expect(200)
    })
  })

  describe('Given the WRONG input', () => {
    it('A user is UNABLE to register', async () => {
      await supertest(app).post('/api/v1/register').send({
        email: "Koan@gmail.com",
        password: "Koan1"
      }).expect(500)
    })
  })

  describe('Given THAT A USER EXISTS', () => {
    it('A user is able to login', async () => {
      await supertest(app).post('/api/v1/login').send({
        username: "koan",
        password: "Koan1"
      }).expect(200)
    })
  })

  describe('Given THAT A USER DOES NOT EXISTS', () => {
    it('A user is unaable to login', async () => {
      await supertest(app).post('/api/v1/login').send({
        username: "Koan",
        password: "Koan1"
      }).expect(400)
    })
  })

  describe('Given that the user exists', () => {
    it('should dispay the available users', async () => {
      const res = await supertest(app).get('/api/v1/users')
      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(1)
    })
  })

  describe('Given that the user exists', () => {
    it('should be able to delete the  user', async () => {
     const res =  await supertest(app).delete(`/api/v1/users/${userId}`).send({userId})
      expect(res.body.Message).toBe('User has been deleted')
    })
  })

  describe('Given that the user exists', () => {
    it('should be able to update the user', async () => {
     const res =  await supertest(app).put(`/api/v1/users/${userId}`).send({email: 'koan2@gmail.com', userId})
      expect(res.status).toBe(200)
    })
  })
})