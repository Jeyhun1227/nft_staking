import Const from '../contants'

export const queryDateHelper = (value : string) => ({
  __type: Const.names.Date,
  iso: value
})
