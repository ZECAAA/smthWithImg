import { useDispatch } from 'react-redux'
import { createStore } from 'redux'

const defaultState: defState = {
  isAuth: false,
}
export interface defState {
  isAuth: boolean
}
interface Action {
  type: string
  payload: any
}
enum ActionCase {
  AUTH = 'AUTH',
  EXIT = 'EXIT',
}
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionCase.AUTH:
      return { ...state, isAuth: true }
    case ActionCase.EXIT:
      return { ...state, smth: false }
    default:
      return state
  }
}
export function Auth() {
  return { type: ActionCase.AUTH }
}
export function Exit() {
  return { type: ActionCase.EXIT }
}
export const store = createStore(reducer)
