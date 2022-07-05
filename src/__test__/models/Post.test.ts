import { Post } from "../../models"
import { dropCollections, dropDatabase, setUp } from '../../setup/db';

const postData = {
  title: "Leetcode 1",
  description: "The infamous two sum",
  author: "Blossom",
  photo: "https://leetcode.com",
  categories: ["DSA", "Leetcode"]
};

beforeEach(async () => {
  await setUp()

})

afterEach(async () => {
  await dropCollections()
  await dropDatabase()
})

describe('Category model', () => {
  it('create and saves post successfully', async() => {
    const post = new Post(postData)
    const data = await post.save()
    expect(data._id).toBeDefined()
    expect(data.categories.length).toBe(2)
    expect(data.title).toBe(postData.title)
    expect(data.description).toBe(postData.description)
    expect(data.author).toBe(postData.author)
    expect(data.photo).toBe(postData.photo)
  })
})