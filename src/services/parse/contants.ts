export const MAX_ITEM_ON_PAGE = 5

export const BYTES_IN_MEGAMYTES = 1000000

const filterTypes = {
  dateRange: 'date-range'
}

const orders = {
  asc: 'asc'
}

const dateTimeFormats = {
  DD_MM_YYYY: 'DD/MM/YYYY',
  DD_MM_YYYY_HH_mm: 'DD/MM/YYYY HH:mm',
  YYYY_MM_DD_HH_mm: 'YYYY-MM-DD HH:mm'
}

const names = {
  Date: 'Date',
  invalidDate: 'Invalid date',
}

export const network = {
  HARDHAT_NETWORK_ID : "31337",
  RINKEBY_NETWORK_ID : "4"
}

export default {
  dateTimeFormats,
  filterTypes,
  orders,
  names,
  network
}
