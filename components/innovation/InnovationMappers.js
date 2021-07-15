import { EVALUATION_X, EVALUATION_Y } from '~/constants/evaluation'
import { CATEGORIES_COLORS, NOT_AFFECTED_COLOR } from '~/constants/colors'

export function intToYEvaluation (int) {
  return EVALUATION_Y[int]
}

export function evaluationToYInt (evaluation) {
  return EVALUATION_Y.findIndex(a => a === evaluation)
}

export function intToXEvaluation (int) {
  return EVALUATION_X[int]
}

export function evaluationToXInt (evaluation) {
  return EVALUATION_X.findIndex(a => a === evaluation)
}

export function colorizeAffectedCategoriesChart (affectedCategories) {
  const result = []
  for (let i = 0; i < 16; i++) {
    result.push(NOT_AFFECTED_COLOR)
  }

  if (affectedCategories && !affectedCategories.includes(0)) { affectedCategories.forEach((a) => { result[a - 1] = CATEGORIES_COLORS[a] }) }

  return result
}
