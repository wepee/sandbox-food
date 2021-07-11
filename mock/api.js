import { Innovation } from './db'

function mockGetInnovation () {
  return new Promise((resolve) => {
    resolve(Innovation)
  })
}

export { mockGetInnovation }
