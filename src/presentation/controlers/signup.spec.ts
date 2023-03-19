import { SignUpController } from './signup'
describe('SignUp Controler', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        //name: 'my_name',
        email: 'my_email',
        password: 'my_password',
        passwordConfirmation: 'my_password',
      },
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
