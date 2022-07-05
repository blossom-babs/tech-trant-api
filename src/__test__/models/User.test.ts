import { User } from "../../models"
import { dropCollections, dropDatabase, setUp } from '../../setup/db';

const userData = {
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

fdescribe('User model', () => {
  it('create and saves user ', async () => {
    const data = new User(userData)
    const user = await data.save()
    expect(user._id).toBeDefined()
    expect(user.email).toBe(data.email)
    expect(user.username).toBe(data.username)
  })

  it('field not defined in the schema should be undefined', async () => {
    const data = new User(userData)
    const user = await data.save()
    expect(user._id).toBeDefined()
    expect(user.hobby).toBeUndefined()
  })
})