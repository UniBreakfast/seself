
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

  init = makeTest("sesElf module is supposed to be exporting an object with one method - a function .attach(dataElf), that supposed to initialize the sesElf with a reference to a dataElf object and add the rest of the methods, also it supposed to return the sesElf object itself", "and it does all that!",
    async (fail, crit)=> {

    const absent = []

    if (typeof sesElf != 'object')
      fail("index.js doesn't export an object")

    if (keys(sesElf).length != 1)
      fail("sesElf object expected to have exactly one property at first")

    if (!sesElf.attach || typeof sesElf.attach != 'function')
      crit("there's no .attach(dataElf) method")
    else {
      if (sesElf.attach.length != 1)
        fail("the .attach(dataElf) method supposed to expect one argument")

      if (await sesElf.attach(dataDuck) != sesElf)
        fail(".attach(dataElf) method supposed to return the same sesElf object")

      methods.splice(0, methods.length,...methods.filter(m =>
        sesElf[m] && typeof sesElf[m] == 'function'? 1 : absent.push(m) && 0))
      if (absent.length)
        fail("sesElf supposed to have methods: "+absent.join(', '))
    }
  }),

  start = makeTest("", "and it does all that!", async (fail, crit)=> {


  })
