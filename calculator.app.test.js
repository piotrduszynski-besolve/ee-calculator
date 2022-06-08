const { describe } = require('@jest/globals')

const calculator = require('./calculator.app.js')
const request = require('supertest')

const dotenv = require('dotenv')

dotenv.config({ path: '.env-test' })
describe('App', () => {
  let calculatorApp

  beforeAll(async () => {
    calculatorApp = await calculator.startApp()
  })

  afterAll(() => {
    calculatorApp.server.close()
  })

  it('should send greetings message', (done) => {
    // given
    // when
    const testRequest = request(calculatorApp.app).get('/')
    // then
    testRequest
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(/{"message":"Hello from calculator"}/)
      .end(function (err, res) {
        done()
        if (err) {
          throw err
        }
      })
  })
})
