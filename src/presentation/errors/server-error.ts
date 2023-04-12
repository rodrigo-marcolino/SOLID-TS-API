export class ServerError extends Error {
  constructor() {
    super(`Internal Server error: ${new Date()}`)
    this.name = 'InvalidParamError'
  }
}
