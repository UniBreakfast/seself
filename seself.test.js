
const
  makeTest = require('./tester'),
  { assign, keys } = Object,

  dataDuck = {
    async addUser(login, hash) {
      this.addedUser = {login, hash}
      return 7
    },
    async user(ref) {
      this.requestedUser = ref
      return ref==13? null : userDuck
    },
    async updUser(id, props) {
      assign(userDuck, props)
      return true
    }
  },
  userDuck = {hash: '$2a$04$bbrFhxI7hw5CuDfqgX4FUu0HxD5PSiP3PI.vTNN.DXu2oA4z4B4e.'}

  sesElf = require('.'),
  methods = 'start, check, end, label, limit, limitAll'.split(', '),

  tests = setTimeout(async ()=> {
    await init()
  }, 100),

  init = makeTest(" ", "and it does all that!",
    async (fail, crit)=> {

    const absent = []

    if (typeof passElf != 'object')
      fail("index.js doesn't export an object")

    if (keys(passElf).length != 1)
      fail("passElf object expected to have exactly one property at first")

    if (!passElf.attach || typeof passElf.attach != 'function')
      crit("there's no .attach(dataElf) method")
    else {
      if (passElf.attach.length != 1)
        fail("the .attach(dataElf) method supposed to expect one argument")

      if (await passElf.attach(dataDuck) != passElf)
        fail(".attach(dataElf) method supposed to return the same passElf object")

      methods.splice(0, methods.length,...methods.filter(m =>
        passElf[m] && typeof passElf[m] == 'function'? 1 : absent.push(m) && 0))
      if (absent.length)
        fail("passElf supposed to have methods: "+absent.join(', '))
    }
  }),

  start = makeTest("", "and it does all that!", async (fail, crit)=> {


  })
