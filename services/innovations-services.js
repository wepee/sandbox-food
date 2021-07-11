import { mockGetInnovation } from '../mock/api'

async function getInnovation () {
  try {
    return await mockGetInnovation()
  } catch (err) {
    console.error(err)
  }
}

export { getInnovation }
