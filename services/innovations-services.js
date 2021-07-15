import { mockGetCategoriesRanking, mockGetInnovation } from '~/mock/api'

async function getInnovation () {
  try {
    return await mockGetInnovation()
  } catch (err) {
    console.error(err)
  }
}
async function getCategoriesRanking () {
  try {
    return await mockGetCategoriesRanking()
  } catch (err) {
    console.error(err)
  }
}

export { getInnovation, getCategoriesRanking }
