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


  describe('Given the CORRECT input', () => {
    it('A user is ABLE to register', async () => {
      await supertest(app).post('/api/v1/register').send({
        email: "Koan@gmail.com",
        username: "koan",
        password: "Koan1"
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
      console.log(res.body)
      expect(res.status).toBe(200)
    })
  })
  // a user is able to sign up with email, password and username
  // a user is able to sign up with correct password and user
  // I can see all the users currently signed up
  // a user can be deleted
  // user details can be updated
})