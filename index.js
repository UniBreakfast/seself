
let dataElf

const
  { assign } = Object, { min, max } = Math,

  start = userid => {},

  check = async ({sid, token}) => {},

  end = async (sid) => {},

  label = async (sid, label) => {},

  limit = async (sid, timeout) => {},

  limitAll = async (userid, timeout) => {},


  attach = async dataElfRef => (dataElf = dataElfRef) &&
    assign(exports, {start, check, end, label, limit, limitAll})


assign(exports, {attach})