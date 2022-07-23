import { Category } from "../../models"
import { dropCollections, dropDatabase, setUp } from '../setup/db';

const categoryData = {
  name: "dailyDSAUpdate"
};

beforeEach(async () => {
  await setUp()
})

afterEach(async () => {
  await dropCollections()
  await dropDatabase()
})

describe.skip('Category model', () => {
  it('create and saves category', async () => {
    const category = new Category(categoryData)
    const data = await category.save()
    expect(data._id).toBeDefined()
    expect(data.name).toBe(categoryData.name)
  })
})