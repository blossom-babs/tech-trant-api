import { Category } from "../../models"

describe('Category model', () => {
  it('name property exists', () => {
    const cat = new Category({name:"DSA"})
    expect(cat.name).toBeDefined()
  })
})