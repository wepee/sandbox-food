import { categoriesRanking, Innovation } from './db'

function mockGetInnovation () {
  return new Promise((resolve) => {
    resolve(Innovation)
  })
}

function mockGetCategoriesRanking () {
  return new Promise((resolve) => {
    resolve(categoriesRanking)
  })
}

export { mockGetInnovation, mockGetCategoriesRanking }
