import * as types from '../types.js'

export const changePrice = makeAction(types.CHANGE_PRICE)
export const changeColor = makeAction(types.CHANGE_COLOR)
export const changePackage = makeAction(types.CHANGE_PACKAGE)
export const addToCart = makeAction(types.ADD_TO_CART)
export const getProDetail = makeAction(types.GET_PRO_DETAIL)

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
