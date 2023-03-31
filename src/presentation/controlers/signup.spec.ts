import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

const makeSut = (): SignUpController => {
  return new SignUpController()
}
describe('SignUp Controler', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut()
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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'my_name',
        // email: 'my_email',
        password: 'my_password',
        passwordConfirmation: 'my_password',
      },
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'my_name',
        email: 'my_email',
        // password: 'my_password',
        passwordConfirmation: 'my_password',
      },
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})
