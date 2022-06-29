import User from "../../models/User";


describe('User model', () => {
  it('tests the username property of the', () => {
    const user = new User({username:"Bloom"})
    expect(user.username).toBe('Bloom')
  })
  it('tests the profile picture property', () => {
    const user = new User()
    expect(user.profilePic).toBe('')
  })
  it('tests the email property', () => {
    const user = new User({email:'blossombab@gmail.com'})
    expect(user.email).toBeUndefined()
  })
  it('tests the password property', () => {
    const user = new User({password: 'p@$$w0rd!'})
    expect(user.password).toBe('p@$$w0rd!')
  })
})