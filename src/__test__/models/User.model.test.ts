import { UserModel } from "../../models"
import { dropCollections, dropDatabase, setUp } from '../setup/db';

const userPayload = {
  username: "Seal",
  email: "seal@gmail.com",
  password: "eal1",
  hobby: "cookery"
};
beforeEach(async () => {
  await setUp()

})

afterEach(async () => {
  await dropCollections();
  await dropDatabase();
});

describe.skip('User model', () => {
  it('create and saves user ', async () => {
    const data = new UserModel(userPayload)
    const user = await data.save()
    expect(user._id).toBeDefined()
    expect(user.email).toBe(data.email)
    expect(user.username).toBe(data.username)
  })

  it('field not defined in the schema should be undefined', async () => {
    const data = new UserModel(userPayload)
    const user = await data.save()
    expect(user._id).toBeDefined()
    expect(user.hobby).toBeUndefined()
  })
})