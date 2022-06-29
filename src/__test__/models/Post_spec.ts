import { Post } from "../../models"

describe('Category model', () => {
  it('title property exists', () => {
    const post = new Post({title:"Leetcode 214"})
    expect(post.title).toBeDefined()
    expect(post.title).toBe('Leetcode 214')
  })

  it('description property exists', () => {
    const post = new Post({desc:"lorem ipsum"})
    expect(post.desc).toBeDefined()
  })

  it('username property exists', () => {
    const post = new Post({username:"bloom"})
    expect(post.username).toBe('bloom')
  })

  it('photo property exists', () => {
    const post = new Post({photo:""})
    expect(post.photo).toBe('')
  })

  it('categories property exists', () => {
    const post = new Post({categories:['Sports', 'DSA', 'Algorithm']})
    expect(post.categories).toBeDefined()
    expect(post.categories.length).toBe(3)
  })
})